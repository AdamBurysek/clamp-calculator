import dotenv from 'dotenv';
import FTPClient from 'ftp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new FTPClient();
const localFolder = path.join(__dirname, 'dist'); //Local folder with app build
const remoteFolder = '/cc'; // Remote folder on FTP server

const ftpConfig = {
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD
};

client.on('ready', () => {
    checkAndPrepareRemoteFolder(remoteFolder, () => {
        uploadFolder(localFolder, remoteFolder, () => {
            console.log('Upload completed.');
            client.end();
        });
    });
});

client.on('error', (err) => {
    console.error('FTP Client Error:', err);
});

client.connect(ftpConfig);

function checkAndPrepareRemoteFolder(remoteFolderPath, callback) {
    client.list(path.posix.dirname(remoteFolderPath), (err, list) => {
        if (err) {
            console.error('Error checking remote folder:', err);
            return callback(err);
        }

        const folderExists = list.some(item => item.name === path.posix.basename(remoteFolderPath) && item.type === 'd');

        if (folderExists) {
            console.log(`Remote folder ${remoteFolderPath} exists. Deleting...`);
            deleteRemoteFolder(remoteFolderPath, () => {
                console.log(`Remote folder ${remoteFolderPath} deleted.`);
                createRemoteFolder(remoteFolderPath, callback);
            });
        } else {
            createRemoteFolder(remoteFolderPath, callback);
        }
    });
}

function deleteRemoteFolder(remoteFolderPath, callback) {
    client.rmdir(remoteFolderPath, true, (err) => {
        if (err) {
            console.error('Error deleting remote folder:', err);
            return callback(err);
        }
        callback();
    });
}

function createRemoteFolder(remoteFolderPath, callback) {
    console.log(`Creating remote folder ${remoteFolderPath}...`);
    client.mkdir(remoteFolderPath, true, (err) => {
        if (err) {
            console.error('Error creating remote folder:', err);
            return callback(err);
        }
        console.log(`Remote folder ${remoteFolderPath} created.`);
        callback();
    });
}

function uploadFolder(localFolderPath, remoteFolderPath, callback) {
    fs.readdir(localFolderPath, (err, files) => {
        if (err) {
            console.error('Error reading local folder:', err);
            return callback(err);
        }

        if (files.length === 0) {
            console.log('Local folder is empty. Nothing to upload.');
            return callback();
        }

        let itemsProcessed = 0;
        const totalItems = files.length;

        files.forEach(file => {
            const localFilePath = path.join(localFolderPath, file);
            const remoteFilePath = path.posix.join(remoteFolderPath, file);

            fs.stat(localFilePath, (err, stats) => {
                if (err) {
                    console.error('Error reading file stats:', err);
                    itemsProcessed++;
                    if (itemsProcessed === totalItems) {
                        callback();
                    }
                    return;
                }

                if (stats.isFile()) {
                    console.log(`Uploading file ${localFilePath} to ${remoteFilePath}...`);
                    client.put(localFilePath, remoteFilePath, (err) => {
                        if (err) {
                            console.error('Error uploading file:', err);
                            itemsProcessed++;
                            if (itemsProcessed === totalItems) {
                                callback();
                            }
                            return;
                        }

                        console.log(`Uploaded file ${localFilePath} to ${remoteFilePath}`);
                        itemsProcessed++;
                        if (itemsProcessed === totalItems) {
                            callback();
                        }
                    });
                } else if (stats.isDirectory()) {
                    console.log(`Creating remote folder ${remoteFilePath}...`);
                    client.mkdir(remoteFilePath, true, (err) => {
                        if (err) {
                            console.error('Error creating remote folder:', err);
                            itemsProcessed++;
                            if (itemsProcessed === totalItems) {
                                callback();
                            }
                            return;
                        }

                        console.log(`Created remote folder ${remoteFilePath}`);
                        uploadFolder(localFilePath, remoteFilePath, () => {
                            itemsProcessed++;
                            if (itemsProcessed === totalItems) {
                                callback();
                            }
                        });
                    });
                }
            });
        });
    });
}

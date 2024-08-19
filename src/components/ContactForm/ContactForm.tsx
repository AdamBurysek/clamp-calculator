import { useState } from "react";
import { cn } from "../../utils/classNames";
import { Errors, FormValues } from "./ContactFormTypes";

const initialFormValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initialErrorsValues: Errors = {
  name: false,
  email: false,
  subject: false,
  message: false,
};

const ContactForm = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Errors>(initialErrorsValues);
  const [pending, setPending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedFormValues = { ...formValues, [name]: value };
    setFormValues(updatedFormValues);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      name: formValues.name.trim().length < 2,
      email: !/^\S+@\S+\.\S{2,}$/.test(formValues.email),
      subject: formValues.subject.trim().length === 0,
      message: formValues.message.trim().length === 0,
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(Boolean);

    const formApi = import.meta.env.VITE_FORM_API_KEY;

    if (!hasErrors && formApi) {
      setPending(true);

      const requestBody = JSON.stringify({
        formValues,
      });

      console.log(requestBody);

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      };

      Promise.all([fetch(formApi, requestOptions)])
        .then((responses) => {
          const hasFailed = responses.some((response) => !response.ok);
          if (hasFailed) {
            throw new Error("Something Failed");
          }
          setFormValues(initialFormValues);
        })
        .catch((error) => {
          console.error("There is a problem with fetch operation:", error);
        })
        .finally(() => {
          setPending(false);
        });
    }
    if (!formApi) {
      console.error("Missing information about form endpoint");
    }
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-xl rounded-lg bg-c-background shadow-md shadow-c-grey-three">
      <div className="p-6">
        <h2 className="mb-2 text-2xl font-bold">Contact</h2>
        <p className="mb-6 text-c-grey-six">
          If you have any questions, suggestions or spotted bug, feel free to contact me.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormInput
              label="Name"
              id="name"
              placeholder="Enter your name"
              type="text"
              onChange={handleChange}
              value={formValues["name"]}
              error={errors["name"]}
            />
            <FormInput
              label="Email"
              id="email"
              placeholder="Enter your email"
              type="email"
              onChange={handleChange}
              value={formValues["email"]}
              error={errors["email"]}
            />
          </div>
          <FormInput
            label="Subject"
            id="subject"
            placeholder="Enter the subject"
            type="text"
            onChange={handleChange}
            value={formValues["subject"]}
            error={errors["subject"]}
          />
          <FormTextarea
            label="Message"
            id="message"
            placeholder="Enter your message"
            onChange={handleChange}
            value={formValues["message"]}
            error={errors["message"]}
          />
          <button
            type="submit"
            className="rounded-md bg-c-primary px-4 py-2 font-medium text-c-background transition-colors hover:bg-c-secondary"
          >
            {pending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

const FormInput = ({
  id,
  label,
  placeholder,
  type,
  value,
  onChange,
  error,
}: {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error: boolean;
}) => {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block font-medium text-c-grey-eight">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={id}
        placeholder={placeholder}
        className={cn("w-full rounded-md border border-c-grey-one px-3 py-2", {
          "border-red-500": error,
        })}
        onChange={onChange}
        value={value}
        name={id}
        maxLength={50}
      />
    </div>
  );
};

const FormTextarea = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  error: boolean;
}) => {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block font-medium text-c-grey-eight">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        className={cn("h-24 w-full rounded-md border border-c-grey-one px-3 py-2", {
          "border-red-500": error,
        })}
        maxLength={1000}
        value={value}
      />
    </div>
  );
};

export default ContactForm;

"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

const CONTACT_EMAIL = "info@vashishthaluxuryfashion.com";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (v: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!v.name.trim()) next.name = "Please enter your name.";
    if (!v.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!EMAIL_PATTERN.test(v.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!v.message.trim()) next.message = "Please enter a message.";
    else if (v.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    return next;
  };

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = `Website enquiry from ${values.name}`;
    const bodyLines = [
      values.message.trim(),
      "",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone.trim() ? `Phone: ${values.phone}` : null,
    ].filter(Boolean);

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setValues(initialState);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {submitted && (
        <p className={styles.success} role="status">
          Your email client should now be open with your message ready to send. If it didn&apos;t open, write to us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <span id="contact-name-error" className={styles.error} role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <span id="contact-email-error" className={styles.error} role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-phone">Phone (optional)</label>
        <input
          id="contact-phone"
          type="tel"
          inputMode="tel"
          value={values.phone}
          onChange={handleChange("phone")}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message && (
          <span id="contact-message-error" className={styles.error} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="btn-primary">
        Send Message
      </button>
    </form>
  );
}

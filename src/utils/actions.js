"use server"

export async function contactFormAction(_prevState, formData) {
  const defaultValues = Object.fromEntries(formData.entries())
  const errors = {}

  // Simple validation
  if (!defaultValues.name || defaultValues.name.length < 2 || defaultValues.name.length > 32) {
    errors.name = "Name must be between 2 and 32 characters"
  }

  if (!defaultValues.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(defaultValues.email)) {
    errors.email = "Invalid email address"
  }

  if (!defaultValues.message || defaultValues.message.length < 2 || defaultValues.message.length > 1000) {
    errors.message = "Message must be between 2 and 1000 characters"
  }

  if (Object.keys(errors).length > 0) {
    return {
      defaultValues,
      success: false,
      errors,
    }
  }

  try {
    // This simulates a slow response like a form submission.
    // Replace this with your actual form submission logic.
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log(defaultValues)

    return {
      defaultValues: {
        name: "",
        email: "",
        message: "",
      },
      success: true,
      errors: null,
    }
  } catch (error) {
    return {
      defaultValues,
      success: false,
      errors: { general: "An error occurred while submitting the form. Please try again." },
    }
  }
}

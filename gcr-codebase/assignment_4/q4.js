
"use strict";

// Q4: Custom Form Builder (Forms + Classes)

// Define the fields required for the form
const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "number", label: "Age", name: "age" },
    { type: "password", label: "Password", name: "password" }
];

// Create a FormBuilder class
class FormBuilder {
    constructor(fields, formId, outputId) {
        this.fields = fields;
        this.form = document.getElementById(formId);
        this.output = document.getElementById(outputId);
    }

    // Generate the form fields dynamically
    buildForm() {
        let formHTML = "";

        for (const field of this.fields) {
            formHTML += `
                <label for="${field.name}">${field.label}</label>
                <input
                    type="${field.type}"
                    id="${field.name}"
                    name="${field.name}"
                    placeholder="Enter ${field.label}"
                    required
                >
            `;
        }

        formHTML += `
            <button type="submit">Submit</button>
        `;

        this.form.innerHTML = formHTML;

        // Handle form submission
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = this.getFormData();

            this.output.textContent =
                "Submitted Form Data:\\n" +
                JSON.stringify(formData, null, 2);

            console.log("Submitted Form Data:", formData);
        });
    }

    // Return all entered values as an object
    getFormData() {
        const data = {};

        for (const field of this.fields) {
            const input = this.form.elements[field.name];

            data[field.name] = input.value;
        }

        return data;
    }
}

// Create a FormBuilder object and build the form
const formBuilder = new FormBuilder(
    fields,
    "dynamicForm",
    "output"
);

formBuilder.buildForm();

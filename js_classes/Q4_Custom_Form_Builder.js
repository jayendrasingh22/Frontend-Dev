'use strict';
// Q4 - Custom Form Builder (Forms + Classes)
// FormBuilder creates a dynamic form from field descriptors and can return values as an object.

class FormBuilder {
  constructor(fields = [], containerId = null) {
    this.fields = fields;
    this.containerId = containerId;
    this.formId = 'dynamicForm_' + Math.random().toString(36).substring(2,8);
  }

  render() {
    if (typeof document === 'undefined') {
      console.log('DOM not available. Use getFormDataWithSample() to test without browser.');
      return;
    }
    const container = document.getElementById(this.containerId) || document.body;
    const form = document.createElement('form');
    form.id = this.formId;
    this.fields.forEach(f => {
      const wrapper = document.createElement('div');
      wrapper.style.marginBottom = '8px';
      const label = document.createElement('label');
      label.textContent = f.label || f.type;
      const input = document.createElement('input');
      input.name = f.name || f.label || f.type;
      input.type = f.type || 'text';
      input.placeholder = f.placeholder || '';
      wrapper.appendChild(label);
      wrapper.appendChild(document.createElement('br'));
      wrapper.appendChild(input);
      form.appendChild(wrapper);
    });
    const submit = document.createElement('button');
    submit.type = 'button';
    submit.textContent = 'Submit';
    submit.addEventListener('click', () => {
      const data = this.getFormData();
      console.log('Form submitted:', data);
    });
    form.appendChild(submit);
    container.appendChild(form);
  }

  getFormData() {
    // If DOM available, read inputs; otherwise, return sample object
    if (typeof document !== 'undefined') {
      const form = document.getElementById(this.formId);
      if (!form) return {};
      const inputs = form.querySelectorAll('input');
      const result = {};
      inputs.forEach(inp => result[inp.name] = inp.value);
      return result;
    } else {
      // Sample return for Node testing
      const sample = {};
      this.fields.forEach(f => sample[f.name || f.label || f.type] = f.sample || '');
      return sample;
    }
  }
}

// Sample usage for Node
const fb = new FormBuilder([
  { type: 'text', label: 'Username', name: 'username', sample: 'demoUser' },
  { type: 'email', label: 'Email', name: 'email', sample: 'demo@example.com' }
]);
console.log('\nFormBuilder sample getFormData:', fb.getFormData());

// In a browser, call fb.render(containerId) to mount the form.

const products = [
    { id: 'p100', name: 'Wireless Mouse' },
    { id: 'p101', name: 'Mechanical Keyboard' },
    { id: 'p102', name: 'USB-C Hub' },
    { id: 'p103', name: 'Bluetooth Speaker' },
  ];
  
  window.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
  
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;  // or product.id if preferred
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });
  
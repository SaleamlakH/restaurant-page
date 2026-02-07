const createContactPage = () => {
    const contact = document.createElement('address');
    contact.classList.add('contact');

    const tel = document.createElement('a');
    tel.href = 'tel:+212345244353';
    tel.textContent = 'Tel: +212 345 244 353';
    contact.appendChild(tel);

    const email = document.createElement('a');
    email.href = 'mailto: rest@gmail.com'
    email.innerHTML = 'Email: rest@gmail.com';
    contact.appendChild(email);

    const address = document.createElement('div');
    address.textContent = 'Address: 12Eve, Addis, Ethiopia';
    contact.appendChild(address);

    return contact;
}   

export { createContactPage };
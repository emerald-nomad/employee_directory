import Modal from './js/modal.js';
import Format from './js/format.js';

const url = 'https://randomuser.me/api/?nat=us&results=12';
let employees = new Array;

let addEmployees = arr => {
    arr.forEach((emp, index) => {
        let employee = document.createElement('div');
        employee.classList.add('grid__col--4');
        employee.classList.add('employee');

        employee.innerHTML = `
                    <div key="${index}" class="employee__wrapper">
                        <img key="${index}" src="${emp.image}" alt="">
                        <div class="employee__content">
                            <h2>${emp.name}</h2>
                            <p>${emp.email}</p>
                            <p>${emp.state}</p>
                        </div>
                    </div>
                `;

        document.querySelector('.wrapper').appendChild(employee);
    })
}

let addModal = employess => {
    let modal = document.createElement('div');
    modal.setAttribute('id', 'modal');
    modal.classList.add('modal');

    modal.innerHTML = `
        
       
        <div class="modal__content">
             <a class="prev">&#10094;</a>
             <a class="next">&#10095;</a>
             <span class="modal__close cursor">&times;</span>
        </div>
        
    `;

    document.querySelector('body').appendChild(modal);

    employees.forEach((employee, index) => {
        let emp = document.createElement('div');
        emp.classList.add('modal__slide');
        emp.setAttribute('key', index);

        emp.innerHTML = `
            <img src=${employee.image} alt="${employee.name}"/>
            <h2>${employee.name}</h2>
            <p>${employee.email}</p>
            <p>${employee.state}</p>
            <hr>
            <p>${employee.phone}</p>
            <p>${employee.address}</p>
            <p>Birthday: ${employee.dob}</p>
        `;
        
        document.querySelector('.modal__content').appendChild(emp)
    });
    
}

let eventListeners = () => {
    document.querySelectorAll('.employee__wrapper').forEach((employee, index) => {
        employee.addEventListener('click', () => Modal.open(index));
    });

    document.querySelector('.modal__close').addEventListener('click', Modal.close);
    document.querySelector('.modal').addEventListener('click', Modal.close);
    document.querySelector('.prev').addEventListener('click', Modal.prev);
    document.querySelector('.next').addEventListener('click', Modal.next);
    document.querySelector('.modal__content').addEventListener('click',Modal.stopPropagation);
}



document.addEventListener('DOMContentLoaded', () => {
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            data.results.forEach(employee => {
                let e = {
                    image: employee.picture.large,
                    name: Format.name(employee.name.first, employee.name.last),
                    username: employee.login.username,
                    email: employee.email,
                    phone: employee.phone,
                    dob: Format.dob(employee.dob),
                    state: Format.string(employee.location.state),
                    address: Format.address(
                        employee.location.street,
                        employee.location.city,
                        employee.location.state,
                        employee.location.postcode
                    ),
                }
                employees.push(e);
            });
        })
        .then(() => {
            addEmployees(employees);
            addModal(employees);
            eventListeners();
        }
        );
});
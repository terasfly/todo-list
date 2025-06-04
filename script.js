const input = document.getElementById('text');
const add = document.getElementById('addBtn');

const tasks = document.querySelector('.tasks');

add.addEventListener('click', () => {
    if (input.value.length > 0) {
        const task = document.createElement('div');
        task.classList.add('task');

        const text = document.createElement('span');
        text.textContent = input.value;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            tasks.removeChild(task);
        });

        task.appendChild(text);
        task.appendChild(removeBtn);

        tasks.appendChild(task);
        input.value = '';
    }
});

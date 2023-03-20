const form = document.querySelector('form');
		const input = document.querySelector('input[type="text"]');
		const list = document.querySelector('#list');

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			if (input.value !== '') {
				const li = document.createElement('li');
				li.innerHTML = `<input type="checkbox" id="${input.value}" name="${input.value}">
								<label for="${input.value}">${input.value}</label>
								<button>X</button>`;
				list.appendChild(li);
				input.value = '';
			}
		});

		list.addEventListener('click', (e) => {
			if (e.target.tagName === 'BUTTON') {
				e.target.parentElement.remove();
			}
		});
import $ from 'jQuery';
import _ from 'lodash';

let counter = 0;

$('body').append('<div id="logo"><div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

const updateCounter = () => {
	counter++;
	// $('#count').text(`${counter} clicks on the button`);
	document.getElementById(
		'count',
	).innerHTML = `${counter} clicks on the button`;
};

document
	.querySelector('button')
	.addEventListener('click', _.debounce(updateCounter, 1000));

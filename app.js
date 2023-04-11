let index = 0;

function changeColors() {

    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'brown'];

    document.getElementsByTagName('body')[0].style.background = colors[index++];

    if (index > colors.length - 1) {
        index = 0;
    }
}
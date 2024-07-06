function changeBackground() {
    const colors = ['#ff6347', '#ffa500', '#ffd700', '#32cd32', '#4682b4', '#8a2be2', '#ff69b4', '#00ced1', '#9932cc', '#20b2aa'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

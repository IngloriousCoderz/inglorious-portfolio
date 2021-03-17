const styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[(styles.length - 1) / 2] = 'Classics';
const removed = styles.shift();
styles.unshift('Rap', 'Reggae');
// const newStyles = ['Rap', 'Reggae'].concat(styles);
// const newStyles = ['Rap', 'Reggae', ...styles];
console.log(styles);

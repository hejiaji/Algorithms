let count;

function move(index, fromRod, toRod) {
  console.log(`Actions: ${++count} move disk ${index} from ${fromRod} to ${toRod}`);
}


function towerOfHanoi(diskIndex, fromRod, assistRod , toRod) {
  if (diskIndex === 1) {
    move(diskIndex, fromRod, toRod);
    return;
  }
  towerOfHanoi(diskIndex - 1, fromRod, toRod, assistRod);
  move(diskIndex, fromRod, toRod);
  towerOfHanoi(diskIndex - 1, assistRod, fromRod, toRod);
}

function run(number) {
  count = 0;
  towerOfHanoi(number, 'A', 'B', 'C');
  return count;
}

export { run };
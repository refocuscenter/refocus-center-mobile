export function toBRL(value: number){
  return 'R$ ' + value.toFixed(2).replace(".", ",");
}
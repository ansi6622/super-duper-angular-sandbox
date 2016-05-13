
export default class HomeController{
  constructor(){
    const vm = this;

    vm.message = 'Hi.'
    vm.theReview = [
       {taste: "Poor. We didnt like the behaviour of our duck", author: "John-e boiiii", reputation: "Notoriously underwhelming", status: {
         alive: true, 
         arranged: "Less than great",
         donor: true}
     }]
  }
}

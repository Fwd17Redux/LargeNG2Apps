import { List, Map } from 'immutable';
import { IState } from '../../../shared/interfaces';


export function orderTotalsByUser(state: IState): Map<string, number> {
  let order: List<any> = state.getIn(['order', 'entities']);
  let products: List<any> = state.getIn(['products', 'entities']);

  if (products.size === 0) {
    return <Map<string, number>>Map();
  }

  return <Map<string, number>>order
    .groupBy(item => item.get('user'))
    .map((items, user) => {
      return items.reduce((sum, item) => {
        let product = products.find(product => product.get('id') === Number(item.get('productId')));
        return sum + product.get('price') * item.get('numberOfProducts');
      }, 0);
    });
}

export function orderTotal(state: IState): number {
  let order: List<any> = state.getIn(['order', 'entities']);
  let products: List<any> = state.getIn(['products', 'entities']);

  if (products.size === 0) {
    return 0;
  }

  return order
    .reduce((sum, item) => {
      let product = products.find(product => product.get('id') === Number(item.get('productId')));
      return sum + product.get('price') * item.get('numberOfProducts');
    }, 0);
}

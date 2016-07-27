import React,{Component} from 'react'
import render from 'react-dom'


/*actions*/

export default class GroupInfo extends Component{
	render (){
		return (
			<div className='groupInfo'>
				<div className='header'>
					<div className='avatar'>
						<img src={this.props.groupInfoObj.avatar}/>
					</div>
					<div className='groupName'>{this.props.groupInfoObj.name}</div>
					<div className='groupOwner'>{this.props.groupInfoObj.ownerName}</div>
				</div>
				<div className='content'>
					<div className='intro'>
						<h3>群简介</h3>
						<p>{this.props.groupInfoObj.intro}</p>
					</div>
					<div className='tip'>
						<h3>温馨提示</h3>
						<p>{this.props.groupInfoObj.tip}</p>
					</div>
				</div>
			</div>
		)
	}
}


export default class IntoGroup extends Component{
	const goIntoGroup={
		'0':'支付入群',
		'1':'群人数已满',
		'2':'不允许加入'
	}
	render (){
		let btn = this.props.buttonStatus.btnStatus ?
							<div>入群学习</div>:
							<div>
								<div>{this.props.buttonStatus.price}</div>
								<div onClink={}>
									{goIntoGroup[this.props.buttonStatus.btnStatus]}
								</div>
							</div>
		return (
			<div>
				{btn}
			</div>
		)
	}
}
const GROUPINFOOBJ={
	avatar:'xx',name:'群名',ownerName:'裙裙老师',intro:'群简介简介简介简介',tip:'温馨提示提示提示提示'
}
const BUTTONSTATUS={
	isAllowed:true,isFull:false,btnStatus:'1',price:'1000.00'
}
//container
export default class GroupIntro extends Component{
	render (){
		return (
			<div>
				<GroupInfo groupInfoObj={GROUPINFOOBJ}/>
				<IntoGroup buttonStatus={BUTTONSTATUS}/>
			</div>
		)
	}
}
//index.js
render(
	<GroupIntro />,
	ducument.body
)




//demo
var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} />
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  render: function() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
});


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);

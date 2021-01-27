import React, { Component } from 'react'

import imgsrc10 from './images/will.jpg';
import imgsrc11 from './images/journ.jpeg';
import imgsrc12 from './images/still.jpeg';
import './Wishlist.css';
export class Wishlist extends Component {
    render() {
        return (
           <div>
           <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="container">
  <table id="cart" class="table table-hover table-condensed">
    <thead>
      <tr>
        <th style={{width:"50%"}}>Product</th>
        <th style={{width:"10%"}}>Price</th>
        <th style={{width:"8%"}}>Quantity</th>
        <th style={{width:"22%"}} class="text-center">Subtotal</th>
        <th style={{width:"10%"}}></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-th="Product">
        {/* <h4 class="nomargin">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product 1</h4> */}
          <div class="row">
            <div class="col-sm-2 hidden-xs"><img src={imgsrc10}  alt="..." class="img-responsive"/></div>
            
           <div class="col-sm-10"> &nbsp;&nbsp;&nbsp;&nbsp;
              
              <p class="pl-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wings Of Fire</p>
            </div>
          </div>
        </td>
        <td data-th="Price">500/-</td>
        <td data-th="Quantity">
          <input type="number" class="form-control text-center" value="1" min="1"/>
        </td>

        <td data-th="Subtotal" class="text-center">1.99</td>
        <td class="actions" data-th="">
          <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button> 
          <td></td>
          <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button> {/*Remove*/}
        </td>
      </tr>
    </tbody>

    
    <tfoot>
      <tr class="visible-xs">
        <td class="text-center"><strong>Total 500/-</strong></td>
      </tr>
      <tr>
        <td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
        <td colspan="2" class="hidden-xs"></td>
        <td class="hidden-xs text-center"><strong>Total $1.99</strong></td>
        <td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
      </tr>
    </tfoot>
  </table>
</div>
         </div>


        
        )
    }
}
  
export default Wishlist;
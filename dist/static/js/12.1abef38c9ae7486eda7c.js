webpackJsonp([12],{RYCZ:function(t,e){},YAaV:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{key_word:this.$route.query.keyword?this.$route.query.keyword:"",brand_code:this.$route.query.brand_code?this.$route.query.brand_code:"",category_id:this.$route.query.category_id?this.$route.query.category_id:"",big_category_id:this.$route.query.big_category_id?this.$route.query.big_category_id:"",page_index:1,page_size:12,order_column:"monthly_sales_volume",order_sord:"desc",goods_list:{data_list:[]},total:0,activesort:1,background:!0}},components:{Commodity:o("GaNR").a},created:function(){this.GetShopGoodsList()},methods:{GetShopGoodsList:function(){var t=this;this.$axios({method:"get",url:"ShopGoods/ShopGoodsList",params:{key_word:this.key_word,brand_code:this.brand_code,category_id:this.category_id,big_category_id:this.big_category_id,page_index:this.page_index,page_size:this.page_size,order_column:this.order_column,order_sord:this.order_sord}}).then(function(e){"0"==e.data.res_status_code?(t.goods_list=e.data.res_content,t.total=e.data.res_content.total_count):t.$message({showClose:!0,message:e.data.res_message,type:"error"})}).catch(function(t){console.log(t)})},changepage:function(t){console.log(t),this.page_index=t,this.GetShopGoodsList()},back:function(){this.$router.back()},orderby:function(t,e){console.log(t,e),this.order_column=t.target.getAttribute("data-column"),2==e?"show_price"==t.target.getAttribute("data-column")&&"asc"==this.order_sord?this.order_sord="desc":this.order_sord="asc":this.order_sord=t.target.getAttribute("data-rank"),this.activesort=e,this.GetShopGoodsList()}},watch:{$route:function(t,e){this.page_index=1,this.key_word=this.$route.query.keyword?this.$route.query.keyword:"",this.brand_code=this.$route.query.brand_code?this.$route.query.brand_code:"",this.category_id=this.$route.query.category_id?this.$route.query.category_id:"",this.big_category_id=this.$route.query.big_category_id?this.$route.query.big_category_id:"",this.GetShopGoodsList()}}},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-row",{attrs:{gutter:0}},[o("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[t._v("  ")]),t._v(" "),o("el-col",{attrs:{xs:24,sm:22,md:18,lg:14,xl:12}},[o("div",{staticClass:"header pd10_20  flex_between_center"},[o("span",{staticClass:"font-size15 bold"},[t._v("商品列表")]),t._v(" "),o("div",{staticClass:"sortlist flex_between_center font-size12"},[o("div",{staticClass:"sortitem bd flex_center_center mg0_10 whitebg",class:"1"==t.activesort?"sort_active_item":"",attrs:{"data-rank":"desc","data-column":"monthly_sales_volume"},on:{click:function(e){e.stopPropagation(),t.orderby(e,1)}}},[o("p",{attrs:{"data-rank":"desc","data-column":"monthly_sales_volume"},on:{click:function(e){t.orderby(e,1)}}},[t._v("综合")])]),t._v(" "),o("div",{staticClass:"sortitem bd flex_center_center mg0_10 whitebg",class:"2"==t.activesort?"sort_active_item":"",attrs:{"data-rank":"asc","data-column":"show_price"},on:{click:function(e){e.stopPropagation(),t.orderby(e,2)}}},[o("p",{attrs:{"data-rank":"asc","data-column":"show_price"}},[t._v("价格")]),t._v(" "),o("i",{class:"show_price"==t.order_column&&"asc"==t.order_sord?"el-icon-arrow-up":"el-icon-arrow-down",attrs:{"data-rank":"asc","data-column":"show_price"}})]),t._v(" "),o("div",{staticClass:"sortitem bd flex_center_center mg0_10 whitebg",class:"3"==t.activesort?"sort_active_item":"",attrs:{"data-rank":"desc","data-column":"monthly_sales_volume"},on:{click:function(e){e.stopPropagation(),t.orderby(e,3)}}},[o("p",{attrs:{"data-rank":"desc","data-column":"monthly_sales_volume"},on:{click:function(e){t.orderby(e,3)}}},[t._v("销量")])])])]),t._v(" "),t.goods_list.data_list.length>0?o("el-row",t._l(t.goods_list.data_list,function(t,e){return o("Commodity",{key:e,attrs:{commodity:t}})})):t._e(),t._v(" "),0==t.goods_list.data_list.length?o("div",{staticClass:"flex_column_center_center pd30"},[o("svg",{staticClass:"icon mg0_10",attrs:{"aria-hidden":"true"}},[o("use",{attrs:{"xlink:href":"#el-icon-comeyang-kongzhuangtai"}})]),t._v(" "),o("p",{staticClass:"font-size12 color333 mg10_0 "},[t._v("没有找到商品哦")]),t._v(" "),o("p",{staticClass:"font-size12 color333 common_a flex_center_center",on:{click:function(e){t.back()}}},[o("i",{staticClass:"el-icon-comeyang-fanhui commoncolor"}),t._v(" "),o("span",[t._v("返回上级")])])]):t._e(),t._v(" "),t.goods_list.data_list.length>0?o("el-row",[o("el-pagination",{attrs:{background:"",layout:"prev, pager, next",currentPage:t.page_index,total:t.total,"page-size":t.page_size},on:{"current-change":t.changepage}})],1):t._e()],1),t._v(" "),o("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[t._v(" ")])],1)],1)},staticRenderFns:[]};var a=o("VU/8")(s,r,!1,function(t){o("RYCZ")},null,null);e.default=a.exports}});
//# sourceMappingURL=12.1abef38c9ae7486eda7c.js.map
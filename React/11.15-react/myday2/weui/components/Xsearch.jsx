let Xsearch = React.createClass({
	getInitialState:function(){
		return {
			bool:false,
			searchText:""
		}
	},
	focusing:function(){
		this.setState({
			bool:true
		})
		console.log(this.refs.input)
		this.refs.input.focus()
	},
	cancelfocusing:function(){
		this.setState({
			bool:false
		})
	},
	getSearchText:function(e){
		this.setState({
			searchText:e.target.value
		})
	},
	searchClear:function(){
		
		this.setState({ searchText:""})
		console.log("sss")
		this.refs.input.focus()
		
	},
	render: function() {
		return(
			<div>
				<div className={(function(self){
					if(self.state.bool){
						return "weui-search-bar weui-search-bar_focusing"
					}else{
						return "weui-search-bar"
					}
				})(this)} id="searchBar">
            <form className="weui-search-bar__form">
                <div className="weui-search-bar__box">
                    <i className="weui-icon-search"></i>
                    <input onChange={this.getSearchText} value={this.searchText} ref="input" type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required=""/>
                    <a onClick={this.searchClear} href="javascript:" className="weui-icon-clear" id="searchClear"></a>
                </div>
                <label onClick={this.focusing} className="weui-search-bar__label" id="searchText" style={{ }}>
                    <i className="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a onClick={this.cancelfocusing} href="javascript:" className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
        </div>
			</div>
		)
	}
})
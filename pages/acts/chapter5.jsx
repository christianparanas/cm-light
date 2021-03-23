import Nav from '../../components/Nav'


export default function chapter5() {
	return (
		<div className="chapter">
			<Nav />
			<div className="content">
				<h2>Unordered List</h2>

				<ul>
				  <li>Coffee</li>
				  <li>Tea</li>
				  <li>Milk</li>
				</ul>  

				<h2>Ordered List</h2>

				<ol>
				  <li>Coffee</li>
				  <li>Tea</li>
				  <li>Milk</li>
				</ol> 
				<h2>Description List</h2>

				<dl>
				  <dt>Coffee</dt>
				  <dd>black hot drink</dd>
				   <dd>white cold drink</dd>
				  <dt>Milk</dt>
				  <dd>black hot drink</dd>
				  <dd>white cold drink</dd>
				</dl>
			</div>
		</div>
	)
}
import Nav from '../../components/Nav'

export default function chapter8() {
	return (
		<div className="chapter8">
			<Nav />
			<div className="content">
				<h2>Registration Form</h2>
				<form action="#">
					<input type="text" placeholder="First name" />
					<input type="text" placeholder="Last name" />
					<input type="email" placeholder="Email name" />
					<input type="password" placeholder="Password" />
					<input type="number" placeholder="Age" />
					<input type="text" placeholder="Address" />
					<input type="submit" value="Register" />
					
				</form>
			</div>
		</div>
	)
}
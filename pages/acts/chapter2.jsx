import Nav from '../../components/Nav'
import Link from 'next/link'

export default function chapter2() {
	return (
		<div className="chapter">
			<Nav />
			<div className="content chap2">
				<h1>WELCOME TO HTML</h1>
				<h2>Eastern Visayas State University</h2>
				<h2><i>College of Engineering</i></h2> 
				<h2><i>Information Technology Department</i></h2>
			</div>
		</div>
	)
}
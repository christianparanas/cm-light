import Nav from '../../components/Nav'

export default function chapter3() {
	return (
		<div className="chapter">
			<Nav />
			<div className="content">
				<h1>Curriculum Vitae</h1>
	
				<h2><u>Personal Information:</u></h2>
<pre>{`
Last Name 	:	Magaan
First Name 	:	Kristal Kate
Middle Name 	:	
Age		:	18
Birthday	:	January 29, 2000

Educational Attainment:

Elementary	:	Kapangian Central School
Year Graduated	:   	2012
	
Secondary	:	Leyte National High School
Year Graduated	:	2016

Tertiary	:	Eastern Visayas State University
Degree		:	Bachelor of Schience in Information Technology
Yeear Graduated	:	Undergrad
`}</pre>
			</div>
		</div>
	)
}
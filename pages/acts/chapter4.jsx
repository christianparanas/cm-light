import Nav from '../../components/Nav'
import Link from 'next/link'

export default function chapter2() {
	return (
		<div className="chapter">
			<Nav />
			<div className="content">
				<p id="algebraic">Algebraic equation</p>
			<p><b>Algebraic equation</b>,statement of the equality of two expression formulated by applying to <br />a set of variables the algebraic operation,namely,addition,subtraction,multiplication,division,<br />raising to a power, and extraction of a root.Example are <i>x<sup>3</sup></i>+1 and (<i>y<sup>4</sup>x<sup>2</sup>+</i>2<i>xy-y</i>)/(<i>x</i>-1)=12.<br />An important special case of such equation is that of polynomial equation, expression of the<br />form <i>axn</i>+<i>bxn</i><sup>-1</sup>+...+<i>gx</i>+<i>h</i>=<i>k</i>. they have as many solutions as their degree (<i>n</i>), and the<br />search for their solutions stimulated much of the development of classical and modern algebra.<br />Equations like x sin (<i>x</i>) =<i> c </i> that involve nonalgebraic operations, such as logaruthms or<br /> trigonometric functions, are said to be transcendental.</p>
			<br /><br /> <br />
			<p id="chemical">Chemical Compound</p>
			<pre><p>A chemical compound is a chemical substance consisting of two or more different chemically bonded 
			elements, with a fixed ratio determining the composition.
			</p></pre>
			<p>The ratio of each element is usually expressed by chemical formula</p>
			<p>For example, water (H<sub>2</sub>O) is a compound consisting of two hydrogen atoms bonded to an oxegyn<br />atom</p>
			<p>The atoms within a compound can held together by a variety of interactions, ranging from <br />covelent bonds to electrostatic forces in ionic bonds</p>
			<p>A continuum of bond polarities exist between the purely covalent bond (as in H2) and ionic bonds.</p>
			<p>For example H<sub>2</sub>O is held together by polar covalent bonds<br />Sodium chloride is an example of ionic compound.</p>
			<br /><br />
<pre>{`
Download Files:	
		Algebraic Expression
		Chemical Compound
`}</pre>
				Source: <a href="www.google.com">Google.com</a> and <a href="www.Yahoo.com">Yahoo.com</a><br /><br /><br />Go back to:<br />	<a href="#algebraic">Lesson1: Algebraic Equation</a><br />	<a href="#chemical">Lesson2: Chemical Compound</a>
			</div>
		</div>
	)
}
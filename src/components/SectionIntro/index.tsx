import { AboutContent, Bars, InfoList, SectionIntroContainer, SkillBars } from "./styles"


function SectionIntro() {
    return(
        <SectionIntroContainer>
            <div className="row section-intro">
                <div className="section-title">
                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>
                </div>
                <div className="intro-info">
                    <img src="imgs/profile-pic.jpeg" alt="Profile Picture"/>
                    <p className="lead">Hi! My name is Marcos and i'm 26 years old! I really love to workout. Beside coding, i'm amateur athlete in Crossfit and in a few months i'm going to Ireland to pursuit my dream to live in another country!</p>
                </div>
            </div>
            <AboutContent>

                <div className="col-six tab-full">
                    <h3>Profile</h3>
   			        <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
                    <InfoList>
   				        <li>
   				        	<strong>Job:</strong>
   				        	<span>Freelancer, Frontend Developer</span>
   				        </li>
   				        <li>
   				        	<strong>Email:</strong>
   				        	<span>marcos.hayama@gmail.com</span>
   				        </li>
                    </InfoList>  
                </div>

                <div className="col-six tab-full">
                <h3>Skills</h3>
   				<p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

				<SkillBars>
				   <Bars>
				   		<div className="progress percent90"><span>90%</span></div>
				   		<strong>HTML5</strong>
				   </Bars>
				   <Bars>
				   		<div className="progress percent85"><span>85%</span></div>
				   		<strong>CSS3</strong>
				   </Bars>
				   <Bars>
				   		<div className="progress percent70"><span>70%</span></div>
				   		<strong>Javascript</strong>
				   </Bars>
				   <Bars>
				   		<div className="progress percent95"><span>95%</span></div>
				   		<strong>React + NextJS</strong>
				   </Bars>
				   <Bars>
				   		<div className="progress percent75"><span>75%</span></div>
				   		<strong>Node</strong>
				   </Bars>
				</SkillBars> 	

                </div>

            </AboutContent>
        </SectionIntroContainer>
    )

}

export default SectionIntro
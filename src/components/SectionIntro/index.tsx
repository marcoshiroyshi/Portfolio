import { SectionIntroContainer } from "./styles"


function SectionIntro() {
    return(
        <SectionIntroContainer>
            <div className="row section-intro">
                <div className="section-title">
                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>
                </div>
                <div className="intro-info">
                    <img src="images/profile-pic.jpg" alt="Profile Picture"/>
                    <p className="lead">Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur ea id quis eiusmod.</p>
                </div>
            </div>
        </SectionIntroContainer>
    )

}

export default SectionIntro
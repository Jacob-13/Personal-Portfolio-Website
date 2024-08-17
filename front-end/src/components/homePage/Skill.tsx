//Skill 1: title=software development description: Best practices, OOP, version control {\n} Java, JavaScript, TypeScript, Python
//Skill 2: title=Fullstack Development description: web applications built with HTML, CSS, JS, and React {\n} Supported by RESTful APIs, express backends, and both relational and NoSQL databases
//Skill 3: title=AI driven solutions description: Taking advantage of PyTorch, advancing steps within the field of healthcare

type SkillProps = {
    title: string,
    description: string
}

const Skill = ( { title, description } : SkillProps ) => {
    return(
        <div>
            <h4>{title}</h4>
            <div>{description}</div>
        </div>
    );
}

export default Skill;
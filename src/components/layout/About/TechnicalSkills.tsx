import AnimatedDiv from "@/components/common/AnimatedDiv";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  imgSrc: string;
};

const skills: Skill[] = [
  {
    name: "JavaScript",
    imgSrc: "/images/skills/javascript.png",
  },
  {
    name: "TypeScript",
    imgSrc: "/images/skills/typescript.png",
  },
  {
    name: "AWS",
    imgSrc: "/images/skills/aws.png",
  },
  {
    name: "Python",
    imgSrc: "/images/skills/python.png",
  },
  {
    name: "SQL",
    imgSrc: "/images/skills/sql.png",
  },
  {
    name: "Docker",
    imgSrc: "/images/skills/docker.png",
  },
  {
    name: "React",
    imgSrc: "/images/skills/react.png",
  },
  {
    name: "Git",
    imgSrc: "/images/skills/git.png",
  },
];

const TechnicalSkills = () => {
  return (
    <div>
      <AnimatedDiv className="text-2xl font-bold mt-8" _delay={0.5}>
        Technical Skills
      </AnimatedDiv>
      <AnimatedDiv className="text-lg font-light mt-3" _delay={0.8}>
        — Bringing Ideas to Life Through Code
      </AnimatedDiv>

      <div className="flex space-x-8 py-6">
        {skills.map((skill, index) => (
          <AnimatedDiv key={index} _delay={1 + index * 0.2}>
            <motion.div
              className="text-center w-16 cursor-pointer"
              whileHover={{ scale: 1.2 }}
            >
              <img
                src={skill.imgSrc}
                alt={skill.name}
                className="h-12 block mx-auto"
              />
              <span className="mt-3 text-sm block">{skill.name}</span>
            </motion.div>
          </AnimatedDiv>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;

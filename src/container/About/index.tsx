import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GitHubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre Mim</Title>
    <Paragraph type="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quasi et,
      assumenda dolores veritatis non suscipit consequatur. Doloribus unde
      cupiditate ducimus. Itaque modi optio totam sequi quaerat perferendis
      fugit quod!
    </Paragraph>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=giuseppinhu&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=giuseppinhu&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
)

export default About

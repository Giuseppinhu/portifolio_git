import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, Button, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Title fontSize={20}>Giuseppe R.</Title>
      <Paragraph type="secundario" fontSize={16}>
        giuseppinhu
      </Paragraph>
      <Description type="principal" fontSize={12}>
        Developer Front-End
      </Description>
      <Button>Trocar Tema</Button>
    </SidebarContainer>
  </aside>
)

export default Sidebar

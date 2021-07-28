import PropTypes from 'prop-types'

import * as S from './styles'

const Main = ({
  title = 'Boilerplate Reactjs',
  description = 'ReactJS, Javascript, Jest, Styled Components e StoryBook'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/illustration.jpeg" />
  </S.Wrapper>
)

Main.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default Main

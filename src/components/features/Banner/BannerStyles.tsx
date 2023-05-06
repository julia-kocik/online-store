import styled from 'styled-components'

export const BannerContainer = styled.div`
    background-image: url('banner.jpeg?${+new Date()}');
    background-size: cover;
    background-position: center;
    height: 330px;
    width: 100%;
`

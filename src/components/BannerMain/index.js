import React from 'react';
import { Play, Check } from 'react-feather';
import {
  BannerContainer, BannerMaskBlack, BannerMainDescription, WatchButton, TextButton, ContentRating, LaunchDate,
} from './style';
import './style.css';
import Logo from '../../assets/spiderman-badge-desktop-tablet-01-ps4-05sep18en.png';

const BannerMain = () => (
  <>
    <BannerContainer>
      <BannerMaskBlack />
    </BannerContainer>
    <BannerMainDescription>
      <BannerMainDescription.Logo>
        <img src={Logo} alt="Logo Spiderman Movie" />

      </BannerMainDescription.Logo>
      <BannerMainDescription.Info className="firstText">
        <LaunchDate>Lançamento</LaunchDate>
        {' '}
        28 Ago. 2019
        <ContentRating>12</ContentRating>
        53.61 GB
      </BannerMainDescription.Info>
      <BannerMainDescription.Texto>
        Quando um novo vilão ameaça a cidade de Nova York, os mundos de Peter Parker e do Homem-Aranha se colidem. Para salvar a cidade e aqueles que ele ama, ele deve se erguer e provar que é maior de todos os super-heróis.
      </BannerMainDescription.Texto>
      <BannerMainDescription.ButtonsNav>
        <WatchButton>
          <Play className="BtnPlay" />
          <TextButton>Assistir</TextButton>
        </WatchButton>
        <WatchButton>
          <Check className="BtnCheck" />
          <TextButton>Minha Lista</TextButton>
        </WatchButton>
      </BannerMainDescription.ButtonsNav>
      <BannerMainDescription.Texto>
        <small className="lastText">
          © 2019 MARVEL
          <br />
          © 2019 Sony Interactive Entertainment LLC
          <br />
          Developed by Insomniac Games, Inc.
        </small>
      </BannerMainDescription.Texto>

    </BannerMainDescription>

  </>
);

export default BannerMain;

import React from 'react';
import './AboutBanner.css';
import Wave from '../assets/about-banner-wave.svg';

const Banner = () => {
    return(  
        <>
        <div className="banner">
            <p className="banner-title-cursive">over ons</p>
            <h className="banner-title">OVER ONS</h>
            <img src={Wave} alt="Wave" className="banner-wave"/>
            <img src="../images/Banner_Background.png" alt="Banner" className="banner-background"/>
        </div>
        <div className="wie-zijn-wij">
            <img src="../images/Filler.png" className="wie-zijn-wij-photo"/>
            <h className="wie-zijn-wij-title">WIE ZIJN WIJ</h>
            <p3 className="wie-zijn-wij-title-cursive">wie zijn wij</p3>
            <p3 className="wie-zijn-wij-tekst">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies vehicula ipsum, non varius lectus maximus in. Cras eget ex euismod, molestie enim vitae, sollicitudin libero. Cras nibh enim, sodales eget risus non, maximus sollicitudin dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam pretium elit placerat purus malesuada, ac condimentum risus facilisis. Sed porta auctor risus, eu convallis felis vestibulum sed. Mauris justo urna, scelerisque ac pharetra at, molestie id turpis. Nulla eu neque at nisl dictum suscipit in eget dolor.</p3>
            <p3 className="wie-zijn-wij-tekst">Curabitur pretium elit nunc, semper gravida sapien lacinia ac. Phasellus quis facilisis arcu. Phasellus lobortis libero a sapien cursus, vel consectetur ex placerat. Duis varius tortor mi, id scelerisque ante scelerisque eget. Phasellus ut orci quam. Nunc quis aliquam justo, ac rhoncus tellus. Curabitur blandit hendrerit mauris, vel dapibus quam iaculis non. Phasellus dictum metus turpis. Donec gravida ipsum quis ante feugiat rutrum. Etiam convallis est ut pulvinar rhoncus. Pellentesque id dignissim urna, ac euismod nibh.</p3>
            <p3 className="wie-zijn-wij-tekst">
            Quisque non diam id lorem varius imperdiet. Praesent venenatis elit risus, a lacinia dolor placerat eu. Nunc nec sollicitudin nisl. Mauris et leo vel augue suscipit luctus ac ac risus. Duis sit amet quam turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum iaculis enim risus, eu laoreet justo cursus a. Pellentesque a elit neque. Suspendisse potenti. Etiam sit amet velit eu felis malesuada molestie.Duis eu nisi id turpis bibendum commodo. Quisque vel pulvinar massa, vitae auctor lectus. Phasellus luctus efficitur tempus.In dictum, massa ac dapibus fermentum, nisl eros suscipit tortor, vitae placerat orci lectus sed nisi. </p3>
        </div>
        </>
    );
};

export default Banner;
import React from 'react';
import { CardColumns } from 'reactstrap';
import Friend from './friend';
import Aaron from '../media/aaron.jpg';
import CH from '../media/ch.jpg';
import Calvin from '../media/calvin.jpg';
import Danny from '../media/danny.jpg';
import Fyon from '../media/fyon.jpg';
import Giselle from '../media/giselle.jpg';
import Ian from '../media/ian.jpg';
import Matt from '../media/matt.jpg';
import Silver from '../media/silver.jpeg';
import WithYou01 from '../media/with-you-01.jpeg';
import WithYou02 from '../media/with-you-02.jpeg';
import WithYou03 from '../media/with-you-03.jpeg';
import WithYou04 from '../media/with-you-04.jpeg';

const Layout = () => {
    return (
        <CardColumns>
            <Friend name="Aaron" image={Aaron} text="Friends are the family that you get to choose. Your closest friends are your confidants, therapists, sidekicks and some of your biggest supporters. Make sure that they know however near or far they are, you’ll always be there for them." />
            <Friend name="Chiau Hui" image={CH} text="Goodbyes are not forever, are not the end; it simply means I’ll miss you until we meet again." />
            <Friend name="Calvin" image={Calvin} text="All da best, Giselle! Your lone adventure is just starting out there in Canada, but your family and friends will always be with you 🙂 see you soon!" />
            <Friend image={WithYou01} />
            <Friend name="Danny" image={Danny} text="Yesterday brought the beginning, tomorrow brings the end, though somewhere in the middle we became the best of friends." />
            <Friend image={WithYou02} />
            <Friend name="Fyon" image={Fyon} text="Good friends never say goodbye. They simply say “See you soon.”" />
            <Friend image={WithYou03} />
            <Friend name="Ian" image={Ian} text="For Giselle," text2="Happy to know that the next chapter of your life will begin soon, enjoy your time and trust in the process. I look forward to the opportunities to bask in the light of your bright future 😌." />
            <Friend image={WithYou04} />
            <Friend name="Matt" image={Matt} text="Nothing makes the earth seem so spacious as to have friends at a distance; they make the latitudes and longitudes." />
            <Friend name="Silver" image={Silver} text="Dear Gazelle," text2="2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019... and counting! No matter how far you travel, I'm here if you need me. The most precious thing that I got from undergrad is not about that one piece of paper but our friendship. Thank you." quote="If ever there is tomorrow when we're not together. There is something you must always remember. You are braver than you believe, stronger than you seem, and smarter than you think. But the most important thing is, even if we're apart... I'll always be with you. - Winnie the Pooh" />
        </CardColumns>
    );
};

export default Layout;
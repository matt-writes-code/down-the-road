import React from 'react';
import { CardColumns } from 'reactstrap';
import Friend from './friend';
import Photos from './photos';

import Aaron from '../media/aaron.jpg';
import CH from '../media/ch.jpg';
import CX from '../media/cx.jpg';
import Calvin from '../media/calvin.jpg';
import Danny from '../media/danny.jpg';
import Fyon from '../media/fyon.jpg';
import Giselle from '../media/giselle.jpg';
import Ian from '../media/ian.jpg';
import Matt from '../media/matt.jpg';
import Silver from '../media/silver.jpeg';
import WithYou01 from '../media/with-you-01.jpeg';
import WithYou02 from '../media/with-you-02.jpeg';
import WithYou03 from '../media/with-you-03.jpg';
import WithYou04 from '../media/with-you-04.jpeg';
import WithYou05 from '../media/with-you-05.jpg';
import WithYou06 from '../media/with-you-06.jpg';
import WithYou07 from '../media/with-you-07.jpg';

const Layout = () => {
    return (
        <div>

            <CardColumns>
                <Friend name="Aaron" image={Aaron} text="Friends are the family that you get to choose. Your closest friends are your confidants, therapists, sidekicks and some of your biggest supporters. Make sure that they know however near or far they are, you’ll always be there for them." />
                <Friend name="Chiau Hui" image={CH} text="Thank you for always having our backs over the many things throughout our uni life. It would never had been the same without you! Now that your heading next step towards your dream, I hope that you bring many happy memories with you and bring more happiness back when we see you in 2 years!!! All the best and safe flight ahead!! Fighting!!><" />
                <Friend name="Calvin" image={Calvin} text="All da best, Giselle! Your lone adventure is just starting out there in Canada, but your family and friends will always be with you 🙂 see you soon!" />
                <Friend name="Danielle" image={Danny} text="Bye Gazella, be well. Praying that you have a fruitful time of study and encouraging friendships in this new endeavor." />
                <Friend name="Fyon" image={Fyon} text="As a friend of you, I am proud and happy for you obtain the opportunity to study abroad. Make the best use of your talent and I'm sure success will come running after you." text2="I wish you all the best & farewell my friend!" quote="朋友，再会！朋友，珍重！流水匆匆，岁月匆匆，唯有友情永存心中。" />
                <Friend name="Ian" image={Ian} text="For Giselle," text2="Happy to know that the next chapter of your life will begin soon, enjoy your time and trust in the process. I look forward to the opportunities to bask in the light of your bright future 😌." />
                <Friend name="Matt" image={Matt} text="Here's a tiny collection of us all so that you'll have a piece of home with you wherever you go." />
                <Friend name="Silver" image={Silver} text="Dear Gazelle," text2="2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019... and counting! No matter how far you travel, I'm here if you need me. The most precious thing that I got from undergrad is not about that one piece of paper but our friendship. Thank you." quote="If ever there is tomorrow when we're not together. There is something you must always remember. You are braver than you believe, stronger than you seem, and smarter than you think. But the most important thing is, even if we're apart... I'll always be with you. - Winnie the Pooh" />
                <Friend name="Chow Xin" image={CX} text="Dear Giselle, you are beautiful, encouraging, determined, caring, generous, diligent, intelligent and oh so sweet. You have been an amazing joy to behold; can attest to such seeing you mature from being a trustworthy schoolmate in Taman SEA to a capable working young lady with various academic and non-academic qualifications." text2="Your greatest achievement in life is the character you display each and every day." text3="I look up to you as a role model, for how you overcome challenges, how you look out for others' interests, how you seek both knowledge and wisdom." text4="Even as you move to Canada, I pray you will continue to be a great blessing, edifying all who cross your path. May good health, protection, favour and wisdom be upon you in every way. Take care, and know you are loved." />
            </CardColumns>
            <CardColumns>
                <Photos image={Giselle} />
                <Photos image={WithYou01} />
                <Photos image={WithYou02} />
                <Photos image={WithYou03} />
                <Photos image={WithYou04} />
                <Photos image={WithYou05} />
                <Photos image={WithYou06} />
                <Photos image={WithYou07} />
            </CardColumns>
        </div>
    );
};

export default Layout;
import { Meta } from "../components/Meta";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Meta title="About Us" keywords="About Church" />
      <div
        style={{ position: "relative", height: 350 }}
        className={styles.bannerContainer}
      >
        <img
          src="/church31.webp"
          style={{
            objectFit: "cover",
            objectPosition: "top center",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="container">
        <div className="py-4"></div>
        <div className="row section mb-3">
          <div className="col-md-3  ">
            <div className={aboutStyles["leadpastor-image"]}></div>
          </div>
          <div className=" col-md-9 ">
            <h1 className="text-title">Pastor Godson Ajaero</h1>
            <h1 className="text-sub-title">Senior Pastor</h1>
            <p>
              <h2 className="article">
                Pastor Godson, who gave his life to Christ in 1982 as a
                teenager, has been involved in church leadership since 1985. He
                has served in various leadership capacities in Nigeria
                Fellowship of Evangelical Students (NIFES), Evangelical
                Fellowship in Anglican Communion (EFAC) and the Redeemed
                Christian Church of God (RCCG). He is currently the Senior
                Pastor of Maranatha Family Missions Outreach (MFMO). He is a
                partner of Calvary Ministries (CAPRO) and through MFMO provides
                support for missionaries in various fields.
              </h2>
            </p>
            <p>
              <h2 className="article">
                He is married to Pastor Tina and they are blessed with three
                children.Pastor Godson, who is an engineer by training, is a
                certified Project Management Professional.
              </h2>
            </p>
            <p>
              <h2 className="article">
                The Lord had laid a burden in the heart of Pastor Godson Ajaero
                to begin a work to raise support for missionary work to an
                African country that has been closed to the gospel. On 19th
                August 2007 the Lord gave him the following passages to
                encourage him for the work ahead. “And so I have made it my aim
                to preach the gospel, not where Christ was named, lest I should
                build on another man’s foundation.” Rom 15:20 (NKJV). “Also I
                heard the voice of the Lord, saying: Whom shall I send, And who
                will go for Us? Then I said, Here am I! Send me.” Isaiah 6:8.
                “And a vision appeared to Paul in the night. A man of Macedonia
                stood and pleaded with him, saying, Come over to Macedonia and
                help us.” Acts 16:9. “Then Peter answered and said to Him, See,
                we have left all and followed You. Therefore what shall we have?
                So Jesus said to them, Assuredly I say to you, that in there
                generation, when the Son of Man sits on the throne of His glory,
                you who have followed me will also sit on twelve thrones,
                judging the twelve tribes of Israel. And everyone who has left
                houses or brothers or sisters or father or mother or wife or
                children or lands, for my name’s sake, shall receive a hundred
                fold, and inherit eternal life. But many who are first will be
                last, and the last first.” Matt 19: 27 – 30. On 14th September
                2007, Pastor Godson and Pastor Tina (wife), after counting the
                costs, yielded to the Lord’s call and made a firm commitment to
                begin Maranatha Family Missions Outreach. Maranatha Family
                started its meetings in February 2008 in Pastor Godson’s home in
                Lekki, Lagos until it leased a property in Berliner Shopping
                Complex, Abijo, Lekki, Lagos. The inauguration of the church was
                held on Sunday 3rd August 2008. The church moved into the
                premises of Splendid Steps School in August 2011 and remained
                there until August 2017. In Nov 2015, the Church acquired a land
                at Golden Pearls Estate, Olokonla, Lekki Lagos and dedicated the
                church building on 27 August 2017.
              </h2>
            </p>
          </div>
        </div>
        {/* <div className="h-line mb-3"></div>
        <div className="row mb-3">
          <div className="col-md-12">
            <h1 className="text-title text-center">Elders</h1>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <div className={aboutStyles["pst-profile-img"]}></div>
            <h1 className="text-sub-title text-bold mt-2">Pastor Happy Tony</h1>
          </div>
          <div className="col-md-4">
            <div className={aboutStyles["pst-profile-img"]}></div>
            <h1 className="text-sub-title text-bold mt-2">Pastor Happy Tony</h1>
          </div>
          <div className="col-md-4">
            <div className={aboutStyles["pst-profile-img"]}></div>
            <h1 className="text-sub-title text-bold mt-2">Pastor Happy Tony</h1>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default About;

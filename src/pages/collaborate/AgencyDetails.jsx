import React from 'react';

const AgencyDetails = () => {
  return (
    <div className="bg-white py-16 px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">Agency Collaboration – Full Details</h1>

      <p className="text-gray-700 mb-6 leading-relaxed">
        At our core, we believe in the power of partnerships. Agencies are more than just collaborators — they are
        co-creators in the stories we tell and the impact we deliver. Whether it's working on a global product
        campaign, an influencer-led activation, or an immersive digital experience, our team is here to innovate with you.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        🌟 <strong>What we offer:</strong>
        <ul className="list-disc pl-6 mt-2 mb-6">
          <li>Integrated digital marketing collaboration</li>
          <li>Event-based influencer engagement</li>
          <li>Cross-platform campaign execution</li>
          <li>Creative ideation & brand storytelling</li>
        </ul>
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        💼 Over the years, we've worked with top-tier agencies across industries — from fashion and beauty to
        food tech and lifestyle. Our ability to adapt, listen, and co-develop ensures that each collaboration is
        rooted in mutual goals and creative excellence.
      </p>

      {/* Long Dummy Content */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit 
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et 
        quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        <br /><br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br /><br />
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec odio. 
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        <br /><br />
        Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. 
        Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
      </p>
    </div>
  );
};

export default AgencyDetails;

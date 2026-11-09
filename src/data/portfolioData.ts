export interface ReflectionTopic {
  id: string;
  topicNumber: number;
  moduleGroup: string;
  moduleGroupId: number;
  title: string;
  guidingQuestion: string;
  briefDescription: string;
  academicLesson: string;
  personalReflections: string[];
  takeaway: string;
  keyThemes: string[];
}

export interface ModuleGroup {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  topicIds: string[];
}

export const MODULE_GROUPS: ModuleGroup[] = [
  {
    id: 1,
    title: "Foundations of Self",
    subtitle: "Theory, Biology & Perception",
    description: "Examining the roots of who I am through classical psychological duality, inherited genetic foundations, and my relationship with physical appearance.",
    topicIds: ["perspectives-of-self", "biological-influences", "body-image"],
  },
  {
    id: 2,
    title: "The Evolving Identity",
    subtitle: "Personality, Time & Heritage",
    description: "Investigating the dynamic organization of traits, the transition into emerging adulthood at 20, and the profound imprint of Filipino communal culture.",
    topicIds: ["personality", "identity-development", "culture-and-ethnicity"],
  },
  {
    id: 3,
    title: "The Contemporary & Holistic Self",
    subtitle: "Digital Autonomy & Inner Equilibrium",
    description: "Navigating identity in the era of artificial intelligence and cultivating sustainable mental, emotional, and nature-connected well-being.",
    topicIds: ["self-in-age-of-ai", "mental-health-and-wellbeing"],
  },
];

export const REFLECTION_TOPICS: ReflectionTopic[] = [
  {
    id: "perspectives-of-self",
    topicNumber: 1,
    moduleGroup: "Foundations of Self",
    moduleGroupId: 1,
    title: "Perspectives of Self",
    guidingQuestion: "How do you personally define yourself? What makes you who you are?",
    briefDescription: "Exploring William James' duality of the 'I' and the 'Me' to understand how inner optimism and social relationships weave together.",
    academicLesson: "According to William James, in his seminal work The Principles of Psychology, the self consists of two separate but interconnected aspects: the 'I' and the 'Me.' The 'I' refers to the self that experiences, reflects, and makes sense of one's past, present, and future as the active subjective knower. Meanwhile, the 'Me' refers to the empirical self—the known object that is shaped and understood through interactions with other people, roles, and the diverse social environments one belongs to.",
    personalReflections: [
      "Relating this concept to my own life, I would describe myself as someone who will always try to make things possible, even when circumstances seem unfavorable. I have always tried to look at the brighter side of every situation, believing that there is always a way forward, no matter how difficult things may become.",
      "I also consider myself an adaptable person. I can adjust to different situations and connect with people regardless of their personalities or backgrounds. In many ways, I find myself going along with the wavelength of those around me.",
      "Looking at William James' concept, I believe that my 'I' is reflected in my optimism and my willingness to keep going despite uncertainties. On the other hand, my 'Me' is reflected in how my interactions with my family, friends, and the people I encounter have influenced the way I think and behave.",
      "I have come to realize that I am not simply a person with a fixed set of characteristics. Rather, I am someone whose understanding of himself continues to develop through personal experiences and relationships. In a way, the person I am today is a combination of what I believe about myself and what I have learned from the people who have become part of my life."
    ],
    takeaway: "I am shaped by both who I believe I am and the people I meet along the way. My own values keep me grounded, while my experiences with others teach me to become more understanding and open-minded. I am constantly learning from both myself and the world around me.",
    keyThemes: ["William James", "The 'I' and 'Me'", "Optimism", "Adaptability", "Social Construction"]
  },
  {
    id: "biological-influences",
    topicNumber: 2,
    moduleGroup: "Foundations of Self",
    moduleGroupId: 1,
    title: "Biological Influences",
    guidingQuestion: "How have your genes, family background, and physical characteristics influenced you?",
    briefDescription: "Understanding the balance of nature and nurture through inherited family traits, compassion, and problem-solving.",
    academicLesson: "Biological perspectives recognize that genes, heredity, and physical constitution lay the foundational blueprint for temperament, physical predispositions, and cognitive tendencies. However, modern psychological consensus emphasizes that nature and nurture are inseparable: biological predispositions are activated, modified, and molded through the specific environment, familial socialization, and life experiences that surround us.",
    personalReflections: [
      "I genuinely believe that one of the major factors that shaped me into who I am today is my biological background. Growing up, I was surrounded by my parents, whose caring attitudes taught me the importance of compassion, and my sisters, whose problem-solving abilities have influenced how I approach different situations. In one way or another, I believe that some of the qualities I possess have been influenced by the people I grew up with.",
      "However, I also recognize that biology alone cannot explain who I am. As discussed in our module, the self is not solely determined by nature but is also continuously shaped by nurture and experiences. The environment I grew up in, the people I met, and the challenges I encountered all contributed to the development of my character.",
      "This made me realize that although I may have inherited certain characteristics, how I choose to develop and express them is also influenced by my experiences. Ultimately, I am a product of both my biological foundation and the environment that continues to shape me."
    ],
    takeaway: "I believe that who I am is shaped by both my nature and the environment I grow up in. My natural traits give me a starting point, while my family, experiences, and personal choices help shape my character. I may be influenced by where I come from, but I also have the freedom to grow and become better.",
    keyThemes: ["Nature vs. Nurture", "Familial Compassion", "Inherited Traits", "Character Building"]
  },
  {
    id: "body-image",
    topicNumber: 3,
    moduleGroup: "Foundations of Self",
    moduleGroupId: 1,
    title: "Body Image",
    guidingQuestion: "How do you perceive your physical appearance? Are you confident about your body?",
    briefDescription: "Moving past societal standards toward genuine gratitude, self-acceptance, and the unconditional love of family and friends.",
    academicLesson: "Body image refers to an individual's multifaceted psychological experience of their physical appearance, encompassing perceptual, affective, and cognitive dimensions. Sociological and psychological frameworks demonstrate that body image is rarely formed in isolation; it is heavily influenced by societal beauty standards, cultural expectations, peer dynamics, and perceived external judgment.",
    personalReflections: [
      "I may not be the tallest person, nor do I consider myself the most handsome, but I am genuinely thankful for the body I have been given. There are moments when I wish I were a little taller or that certain aspects of my appearance were different. However, as I grow older, I have gradually learned to appreciate myself beyond the physical characteristics I sometimes wish I could change.",
      "One thing I learned from our discussion about body image is that the way we perceive ourselves is not entirely independent of our surroundings. Our body image can be influenced by social expectations, cultural standards of beauty, and how we think other people see us. Looking back, I realize how fortunate I am to have grown up surrounded by family and friends who never made me feel that I needed to change my appearance to deserve their acceptance.",
      "Because of this, I have learned that although I cannot always change my physical characteristics, I can change the way I perceive and carry myself. I am slowly understanding that confidence does not necessarily mean being completely satisfied with every aspect of my appearance. Sometimes, it simply means accepting that I am not perfect and choosing to appreciate myself anyway. For me, having people who love and accept me for who I am has been one of the greatest gifts, because their acceptance has also helped me learn to accept myself."
    ],
    takeaway: "I am learning that confidence is not about having the perfect body or meeting other people's expectations. It is about accepting myself, including the things I may still be insecure about, and appreciating what my body can do. More importantly, I am grateful for the people who make me feel accepted and remind me that I am enough as I am.",
    keyThemes: ["Self-Acceptance", "Societal Standards", "Unconditional Support", "Gratitude", "Inner Confidence"]
  },
  {
    id: "personality",
    topicNumber: 4,
    moduleGroup: "The Evolving Identity",
    moduleGroupId: 2,
    title: "Personality",
    guidingQuestion: "What are your personality traits? How do you behave and interact with others?",
    briefDescription: "Examining extroversion through Gordon Allport's lens while honoring the quiet, reflective side that tests cannot capture.",
    academicLesson: "Psychologist Gordon Allport defined personality as 'the dynamic organization within the individual of those psychophysical systems that determine his unique adjustments to his environment.' Personality is not merely a collection of rigid traits or static categories; it is an active, evolving organization that shapes our habitual patterns of behavior, thought, and emotion across changing social contexts.",
    personalReflections: [
      "I would describe myself as an extroverted person, which is also reflected in the results of the personality test we took during class. I enjoy being around people, starting conversations, and creating an environment where others feel comfortable. I have always loved being the bundle of joy for those around me, and I find happiness in knowing that I can make someone's day a little better.",
      "Our discussion of Gordon Allport's definition of personality helped me understand that personality is a dynamic organization of psychological and physical characteristics that influence our patterns of behavior, thoughts, and feelings. Relating this to myself, I believe that my extroversion and adaptability are among the characteristics that consistently influence how I interact with others.",
      "However, I also recognize that a personality test cannot completely capture who I am. Although it can provide an idea of my dominant traits, there are still many aspects of myself that cannot simply be measured through a set of questions. I may be naturally outgoing, but I also have moments when I prefer to be alone, reflect, and process my thoughts. This made me realize that personality is not simply about assigning labels to ourselves. It is also about understanding the different ways we respond to people, situations, and experiences."
    ],
    takeaway: "Personality tests can help me understand some of my traits, but I know that no result can fully define who I am. I can be outgoing and enjoy being around people, yet I also value quiet moments and time to reflect. Both sides are part of me, and I am learning to embrace them.",
    keyThemes: ["Gordon Allport", "Extroversion", "Adaptability", "Introspection", "Beyond Labels"]
  },
  {
    id: "identity-development",
    topicNumber: 5,
    moduleGroup: "The Evolving Identity",
    moduleGroupId: 2,
    title: "Identity Development",
    guidingQuestion: "How has your identity changed from childhood to your current age?",
    briefDescription: "Reflecting on turning 20: the journey from childhood play to adult conviction, and finding peace in the uncertainty of becoming.",
    academicLesson: "Developmental psychology teaches that identity formation is a lifelong psychosocial process rather than an event completed in adolescence. As individuals transition through emerging adulthood (ages 18–25), they experience shifting worldviews, increasing moral independence, heightened social accountability, and the constructive tension between exploration and commitment.",
    personalReflections: [
      "When I was still a child, my biggest concerns were whether I would be allowed to play outside and how I could convince my mother not to make me take an afternoon nap. Life seemed much simpler back then. I rarely thought about the future, responsibilities, or the kind of person I wanted to become.",
      "Now that I have turned 20, I realize how much things have changed. There are responsibilities I need to fulfill, decisions I have to make, and expectations that sometimes make me question whether I am doing enough. I can say that I have developed a stronger sense of conviction. When I genuinely believe in something, I am now more willing to stand up for it and fight for what I think is right.",
      "However, despite these changes, I still feel that I have not completely established my identity. There are moments when I find myself questioning what I truly want, where I want to go, and what kind of person I eventually want to become. I sometimes feel that I am still figuring things out, and I cannot confidently pinpoint exactly who I am.",
      "Through our discussions on selfhood, I realized that this uncertainty is not necessarily a sign that I lack an identity. Rather, it may be part of the process of constructing one. The self is not something that is established once and remains unchanged forever. It continues to develop as we encounter new experiences, meet different people, and gain a better understanding of ourselves. Perhaps, at 20, I am not supposed to have everything figured out just yet. I am still growing, and I am learning to embrace that process."
    ],
    takeaway: "Being 20 means I am still figuring things out, and that's okay. I may not have all the answers yet, but every choice, experience, and lesson helps me understand myself and become the person I hope to be.",
    keyThemes: ["Emerging Adulthood", "Age 20", "Conviction", "Navigating Uncertainty", "Continuous Becoming"]
  },
  {
    id: "culture-and-ethnicity",
    topicNumber: 6,
    moduleGroup: "The Evolving Identity",
    moduleGroupId: 2,
    title: "Culture and Ethnicity",
    guidingQuestion: "How have your family, Filipino culture, traditions, and environment shaped you?",
    briefDescription: "Tracing personal values back to Filipino roots—pakikipagkapwa, resilience, resourcefulness, and family warmth.",
    academicLesson: "Sociological theories of socialization (Module 3) establish that culture is not an external garment, but an internalized mental and moral framework. Through primary and secondary socialization, communal traditions, linguistic nuances, and shared cultural values become foundational building blocks of personal identity, moral orientation, and interpersonal behavior.",
    personalReflections: [
      "My family has played a significant role in shaping the person I am today. I have always believed that family is our first teacher, our first guide, and the foundation that helps us navigate the world. Looking back, I realize how much of what I practice and believe today can be traced back to the values my family instilled in me. They taught me how to distinguish right from wrong, how to treat other people, and how to face different situations in life.",
      "Aside from my family, Filipino culture has also contributed to the way I understand myself and the world around me. Growing up in a culture that values resilience, resourcefulness, and pakikipagkapwa has influenced how I respond to challenges and interact with others. I have learned to adapt when circumstances do not go as planned, find solutions when resources are limited, and recognize the importance of maintaining meaningful relationships with the people around me.",
      "This connects to our discussion in Module 3 about how culture is internalized through socialization and becomes part of our attitudes, beliefs, and behavior. I realized that many of the things I consider natural about myself are actually values and practices I learned from my family and the society I grew up in. In this sense, my identity is not formed independently. It is also a reflection of the culture, traditions, and people that have surrounded me throughout my life."
    ],
    takeaway: "Being Filipino is a part of who I am and how I see the world. I grew up valuing pakikipagkapwa, respect, and resourcefulness, which continue to shape how I treat others and face life's challenges. These values remind me to stay grounded, be considerate, and make the most of what I have.",
    keyThemes: ["Filipino Culture", "Pakikipagkapwa", "Socialization", "Family Foundation", "Resourcefulness"]
  },
  {
    id: "self-in-age-of-ai",
    topicNumber: 7,
    moduleGroup: "The Contemporary & Holistic Self",
    moduleGroupId: 3,
    title: "The Self in the Age of AI",
    guidingQuestion: "How does technology and social media influence how you see yourself?",
    briefDescription: "Evaluating the benefits and pitfalls of AI—balancing academic convenience with intellectual autonomy and mindful presence.",
    academicLesson: "Contemporary media ecology and philosophical perspectives on the digital self analyze how algorithmically mediated spaces, social media curation, and generative artificial intelligence influence human cognition, self-perception, and autonomy. When external technologies mediate our thoughts and public self-presentation, they become active co-creators of our social environment and identity.",
    personalReflections: [
      "With the growing prevalence of artificial intelligence, technology has gradually become integrated into almost every aspect of our daily lives. Personally, I can say that it has brought both convenience and challenges to my life. On the positive side, AI has made my academic responsibilities more manageable, especially when I need help understanding unfamiliar concepts, organizing my thoughts, or exploring different ideas. There are also moments when I find it easier to express my thoughts through AI when I simply need an avenue to process what I am feeling.",
      "However, I also recognize that there are times when I become too dependent on it, to the point that I sometimes struggle to think through things independently. This made me realize that although technology can assist me, it should never replace my ability to think critically, make decisions, and form my own understanding of the world.",
      "Connecting this to our discussions about the self as something shaped by social interactions and external influences, I realized that technology has also become part of the environment in which I construct my identity. What I consume online, the opinions I encounter, and the way I present myself on social media can influence how I perceive myself and others. This is why I believe it is important to remain mindful of how I use technology. I want to take advantage of what it can offer without allowing it to dictate how I think, feel, or define myself."
    ],
    takeaway: "Technology is a supportive tool, not a substitute for critical thought, moral judgment, or genuine human intuition. To protect our authentic selfhood in a digital age, we must remain conscious creators and thinkers rather than passive consumers.",
    keyThemes: ["Artificial Intelligence", "Cognitive Independence", "Digital Mind", "Critical Thinking", "Self-Curation"]
  },
  {
    id: "mental-health-and-wellbeing",
    topicNumber: 8,
    moduleGroup: "The Contemporary & Holistic Self",
    moduleGroupId: 3,
    title: "Mental Health and Wellbeing",
    guidingQuestion: "How do you handle stress, emotions, challenges, and personal struggles?",
    briefDescription: "Finding sanctuary in nature walks, embracing emotional vulnerability, and realizing that pausing is not giving up.",
    academicLesson: "Psychological resilience models emphasize that mental health is not simply the absence of stress or distress, but the ability to regulate emotional responses, employ adaptive coping strategies, and maintain restorative practices. Reconnecting with the natural world and practicing intentional pauses have been clinically demonstrated to reduce cognitive overload and restore emotional equilibrium.",
    personalReflections: [
      "I believe that mental health and wellbeing are just as important as our physical health. One of the ways I manage stress and overwhelming thoughts is by going outside for a walk. There is something peaceful about reconnecting with nature. Whenever I find myself overwhelmed by academic responsibilities or personal concerns, taking a walk gives me the opportunity to pause, breathe, and temporarily distance myself from everything that occupies my mind.",
      "I particularly enjoy the feeling of being surrounded by nature because it reminds me of how small I am in the grand scheme of things. Sometimes, I look at the vastness of the sky or the surroundings and realize that the problems I am facing, no matter how overwhelming they may seem at the moment, are only a small part of my entire life. It gives me comfort to remember that things change, difficult situations eventually pass, and I do not have to figure everything out all at once.",
      "I think this also reflects my optimistic personality and the way I have learned to cope with challenges. Rather than allowing my worries to consume me, I try to give myself time to process them and regain perspective. I am still learning how to take better care of my mental and emotional wellbeing, but one thing I have come to understand is that taking a step back does not mean giving up. Sometimes, it simply means giving myself the space I need to continue moving forward."
    ],
    takeaway: "I have learned that taking a break does not mean giving up. Sometimes, I just need to slow down, take a walk, enjoy nature, and clear my mind. These quiet moments remind me that not every problem needs to be solved right away, and that things will eventually get better.",
    keyThemes: ["Nature Connection", "Stress Coping", "Vast Perspective", "Self-Care", "Emotional Resilience"]
  }
];

export interface IntervieweeProfile {
  id: string;
  relationship: string;
  roleDescription: string;
  perspectiveFocus: string;
  quote: string;
  observedStrengths: string[];
  observedGrowthAreas: string[];
  reflectionSnippet: string;
}

export const INTERVIEW_DATA = {
  sectionTitle: "Through Their Eyes",
  sectionSubtitle: "Sometimes, others help us see what we fail to notice in ourselves.",
  intro: "To gain an honest, holistic understanding of who I am and how my character is experienced by the people around me, I conducted in-depth interviews with two individuals who know me through different facets of life. Their candid observations offered a mirror—illuminating strengths I often take for granted and gentle truths about areas where I still need to mature.",
  interviewees: [
    {
      id: "interviewee-1",
      relationship: "First Interviewee",
      roleDescription: "Family Member & Lifelong Witness",
      perspectiveFocus: "Familial & Core Moral Conduct",
      quote: "You have always stood by your words. When you make a promise or say you'll take care of something, we know it will be done. But remember that life doesn't always have to be rushed at the very last minute.",
      observedStrengths: [
        "Strong-willed and determined in fulfilling responsibilities",
        "Deeply dependable — stands by his words and commitments",
        "Approachable and compassionate toward family and loved ones",
        "Resilient and self-reliant when confronting personal obstacles"
      ],
      observedGrowthAreas: [
        "Tendency to become a crammer and leave tasks to the deadline",
        "Occasional impatience when others don't match his urgency",
        "Needs more structured time management to avoid unnecessary stress"
      ],
      reflectionSnippet: "Seeing how deeply my family values my word reminded me that character is built in the quiet consistency of keeping promises. Yet, their observation about cramming was a candid wake-up call to manage my time with greater foresight."
    },
    {
      id: "interviewee-2",
      relationship: "Second Interviewee",
      roleDescription: "Close Academic Peer & Friend",
      perspectiveFocus: "Social, Collaborative & Interpersonal Dynamic",
      quote: "What stands out to me the most over the years is how much you've learned to listen. You used to be very set on your own ideas, but now you actively pause, ask for opinions, and consider where someone else is coming from.",
      observedStrengths: [
        "Magnetic, uplifting presence who creates comfortable spaces",
        "Willingness to learn and actively listen to others' viewpoints",
        "Dedication to team goals and dependable collaborative support",
        "Authentic vulnerability and capacity to learn from mistakes"
      ],
      observedGrowthAreas: [
        "Expecting others to give the exact same energy and effort he puts in",
        "Needs to remember people express care and support in different ways",
        "Managing expectations to avoid unnecessary emotional disappointment"
      ],
      reflectionSnippet: "My peer's observation highlighted something profound: people have different ways of communicating and caring. True empathy requires letting go of the expectation that everyone will love, work, or respond on my exact wavelength."
    }
  ] as IntervieweeProfile[],
  realizations: {
    title: "My Realizations",
    subtitle: "Synthesizing the Mirror: Strengths, Blind Spots, and Transformative Growth",
    paragraphs: [
      "Based on the interviews, I realized that others see me as someone who is strong-willed, dependable, and determined. They described me as a person who stands by my words and does my best to fulfill my commitments. They also see me as someone who is approachable, helpful, and understanding, especially toward the people who matter to me. I was also reminded that I do not have to prove myself to others because my character is already reflected in how I treat and interact with them.",
      "However, I also became aware of some aspects of myself that I still need to improve. I can sometimes be impatient and expect others to give the same effort that I give them. I also tend to become a crammer, which shows that I need to work on managing my time better. Another thing I learned is that I should become more open to other people's perspectives instead of always relying on what I already have in mind. I also need to understand that people have different ways of thinking and showing their care.",
      "What stood out to me the most was how both interviewees recognized my growth over the years. From being someone who was not always open to suggestions, I have gradually learned to listen, understand, and consider other people's opinions. They also noticed how I have become more accepting of myself and more capable of learning from my mistakes.",
      "Lastly, I realized that one of the qualities that makes me unique is how I handle challenges. Although I may appear strong and independent to others, they also recognize that I experience struggles of my own. What matters is that I continue to find ways to stand up, cope, and try again, even when things are difficult. Their responses reminded me that personal growth is not about being perfect, but about recognizing my weaknesses, appreciating my strengths, and continuously working to become a better version of myself."
    ],
    highlightedQualities: [
      { name: "Determination & Strong Will", description: "Standing firm in convictions and following through on obligations." },
      { name: "Dependability & Commitment", description: "A person whose word is reflected in tangible everyday actions." },
      { name: "Approachability & Understanding", description: "Creating an environment where others feel seen, safe, and heard." },
      { name: "Independence & Dedication", description: "Carrying responsibilities with self-reliance and quiet pride." },
      { name: "Resilience in Adversity", description: "Rising after setbacks, coping with struggles, and beginning again." },
      { name: "Willingness to Learn & Listen", description: "Active receptiveness to feedback and new perspectives." }
    ],
    growthAreas: [
      { name: "Patience", description: "Allowing time and life to unfold without forcing rapid outcomes." },
      { name: "Time Management", description: "Overcoming procrastination and last-minute cramming habits." },
      { name: "Managing Expectations", description: "Understanding that others give and love in distinct, valid ways." },
      { name: "Openness to Differing Views", description: "Remaining receptive to viewpoints that contrast with my own." }
    ]
  }
};

export const MANIFESTOS_DATA = {
  personal: {
    title: "MY PERSONAL MANIFESTO",
    subtitle: "A Promise to the Person I Am Becoming",
    date: "Self and Society Academic Portfolio",
    paragraphs: [
      "I believe that life is a continuous process of learning, growing, and discovering who I truly am. I may not have everything figured out, but I choose to embrace every experience as an opportunity to understand myself better. I will not allow my mistakes to define me, but I will allow the lessons I gain from them to shape the person I become.",
      "I promise to remain true to my values and stand firm in what I believe is right. I will strive to be a person whose words are reflected in actions, someone who can be trusted, approached, and counted on. I will continue to treat others with kindness and understanding, knowing that everyone carries struggles that may not always be visible.",
      "I will also remind myself that not everyone thinks, feels, or gives in the same way I do. I will learn to manage my expectations, become more patient, and understand that genuine relationships are not measured by how much people can give in return. I will listen more, remain open to different perspectives, and recognize that there is always something I can learn from others.",
      "I will take responsibility for my own growth. I will work on my weaknesses, especially my tendency to procrastinate and my difficulty managing time. I will learn to balance independence with the willingness to ask for help, and determination with the patience to understand that not everything happens according to my plans.",
      "I promise to take care of myself, not only physically but also mentally and emotionally. I will allow myself to rest without feeling guilty, acknowledge my struggles without pretending to be strong all the time, and appreciate the little things that bring me peace. I will never measure my worth solely through achievements, appearances, or the expectations of others.",
      "Above all, I will remain resilient. Like a tree that stands through changing seasons and strong winds, I will continue to stand firm even when life becomes difficult. I may bend, stumble, or lose my way, but I will always find the courage to begin again.",
      "I do not promise to become a perfect person. I promise to become a better one, one decision, one lesson, and one day at a time."
    ]
  },
  health: {
    title: "MY HEALTH MANIFESTO",
    subtitle: "A Commitment to Taking Care of Myself",
    date: "A Holistic Vow to Mind, Body, & Spirit",
    paragraphs: [
      "I believe that taking care of myself is not a luxury, but a responsibility. Health is not simply about being physically fit or free from illness. It is also about having peace of mind, understanding my emotions, and finding balance in the different aspects of my life.",
      "I promise to listen to my body and give it the rest and nourishment it deserves. I will make an effort to develop healthier habits, stay physically active, eat properly, and get enough sleep. I understand that I do not have to make drastic changes overnight. Small, consistent efforts can make a meaningful difference.",
      "I will also prioritize my mental and emotional well-being. I will allow myself to feel, acknowledge my struggles, and accept that I do not always have to be strong. Whenever life becomes overwhelming, I will take a step back, breathe, and give myself time to recover. I will not measure my worth through productivity alone.",
      "I will make time for the things that bring me peace, whether it is taking a walk, enjoying nature, spending time with my family, or simply having a quiet moment with myself. I will learn to balance my responsibilities with the need to rest and enjoy life.",
      "Lastly, I promise to be patient with myself. There will be days when I fail to follow my routines or fall back into unhealthy habits, but I will not let these moments discourage me. Instead, I will learn from them and try again.",
      "I choose to take care of myself not because I need to become perfect, but because I deserve to live a life where I am healthy, fulfilled, and at peace."
    ],
    commitments: [
      {
        number: "01",
        title: "Physical Activity & Movement",
        summary: "Daily intentional motion and staying active to cultivate vitality and strength.",
        detail: "Honoring the body through purposeful movement, whether regular exercise or restorative walks."
      },
      {
        number: "02",
        title: "Proper Nutrition & Hydration",
        summary: "Nourishing the body with wholesome meals and mindful hydration.",
        detail: "Choosing foods that sustain sustained energy and respecting physical wellness as a foundation."
      },
      {
        number: "03",
        title: "Adequate Sleep & Rest",
        summary: "Resting without guilt, recognizing sleep as essential healing.",
        detail: "Establishing consistent evening rhythms and honoring the body's need for deep regeneration."
      },
      {
        number: "04",
        title: "Mental & Emotional Well-being",
        summary: "Allowing vulnerability and detaching self-worth from sheer productivity.",
        detail: "Pausing when overwhelmed, acknowledging feelings, and giving emotions room to be processed."
      },
      {
        number: "05",
        title: "Family Time & Nature Walks",
        summary: "Grounded connection with loved ones and the peaceful vastness of the sky.",
        detail: "Regularly stepping outside into natural spaces to find calm perspective and recharge spirits."
      },
      {
        number: "06",
        title: "Patience & Self-Compassion",
        summary: "Forgiving off-days, learning from setbacks, and beginning anew without shame.",
        detail: "Treating oneself with the same kindness and understanding offered to cherished friends."
      }
    ]
  }
};

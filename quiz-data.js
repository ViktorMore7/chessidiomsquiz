const quizData = {
    sections: [
        { id: 1, name: "Classic Checkmates", icon: "sword", range: [1, 10] },
        { id: 2, name: "Middlegame Manoeuvres", icon: "git-branch", range: [11, 25] },
        { id: 3, name: "Endgame Expressions", icon: "flag", range: [26, 35] },
        { id: 4, name: "Grandmaster's Gambit", icon: "crown", range: [36, 40] }
    ],
    
    questions: [
        // === SECTION 1: Classic Checkmates (1-10) ===
        {
            id: 1,
            section: 1,
            type: "definition",
            question: "What does the idiom \"to be a pawn in someone's game\" mean?",
            hint: false,
            options: [
                "A) To be a skilled strategist in negotiations",
                "B) To be used or manipulated by someone else for their own purposes",
                "C) To sacrifice personal goals for team success",
                "D) To move slowly but steadily toward victory"
            ],
            correct: 1,
            explanation: "In chess, pawns are the least powerful pieces, often sacrificed for strategic advantage. The idiom describes someone being exploited by others."
        },
        {
            id: 2,
            section: 1,
            type: "blank",
            question: "After hours of negotiation, the prosecutor finally declared ________, leaving the corrupt official with no escape and no choice but to confess.",
            hint: false,
            options: [
                "A) stalemate",
                "B) checkmate",
                "C) endgame",
                "D) gambit"
            ],
            correct: 1,
            explanation: "Checkmate is the final winning move in chess where the king cannot escape. Metaphorically, it means complete defeat with no remaining options."
        },
        {
            id: 3,
            section: 1,
            type: "definition",
            question: "What does it mean \"to make the first move\"?",
            hint: false,
            options: [
                "A) To win a competition decisively",
                "B) To take the initiative in a situation",
                "C) To sacrifice a minor advantage for a major one",
                "D) To carefully observe before acting"
            ],
            correct: 1,
            explanation: "In chess, White always moves first. The idiom means to be proactive and take initial action rather than waiting for others."
        },
        {
            id: 4,
            section: 1,
            type: "blank",
            question: "When the experimental drug failed its third clinical trial, the research team had to go ________ and redesign their entire approach from scratch.",
            hint: false,
            options: [
                "A) into stalemate",
                "B) for a gambit",
                "C) back to square one",
                "D) on the defensive"
            ],
            correct: 2,
            explanation: "Though originating from board games generally, this phrase evokes chess's grid-like board. It means to return to the beginning and start over."
        },
        {
            id: 5,
            section: 1,
            type: "definition",
            question: "When someone says \"It's your move,\" what are they indicating?",
            hint: false,
            options: [
                "A) You have won the argument",
                "B) It's someone's turn to make a decision or take action",
                "C) You should sacrifice your position",
                "D) The game has reached its conclusion"
            ],
            correct: 1,
            explanation: "This direct chess borrowing indicates that responsibility for the next action now falls to the person addressed."
        },
        {
            id: 6,
            section: 1,
            type: "blank",
            question: "The CEO's decision to acquire the smaller competitor before they could IPO was widely praised as ________ that would secure market dominance for decades.",
            hint: false,
            options: [
                "A) a brilliant blunder",
                "B) a forced move",
                "C) a pawn sacrifice",
                "D) a strategic move"
            ],
            correct: 3,
            explanation: "A strategic move in chess is one planned for long-term advantage. The idiom describes any carefully planned action with future goals in mind."
        },
        {
            id: 7,
            section: 1,
            type: "definition",
            question: "What does \"a chess game\" mean when describing a situation?",
            hint: false,
            options: [
                "A) A simple problem with an obvious solution",
                "B) A complex situation requiring strategic planning and careful thinking",
                "C) A competition with clearly defined rules",
                "D) A situation where luck matters more than skill"
            ],
            correct: 1,
            explanation: "This idiom uses chess as a metaphor for any complex, multi-layered situation where participants must think several steps ahead."
        },
        {
            id: 8,
            section: 1,
            type: "blank",
            question: "The union and management have been bargaining for months, but neither side will compromise—they're stuck in ________ with no progress possible.",
            hint: false,
            options: [
                "A) checkmate",
                "B) endgame",
                "C) stalemate",
                "D) gambit"
            ],
            correct: 2,
            explanation: "A stalemate in chess occurs when neither king can be checkmated but no legal moves remain. It describes any deadlock where progress is impossible."
        },
        {
            id: 9,
            section: 1,
            type: "definition",
            question: "What does \"to control the centre\" mean metaphorically?",
            hint: false,
            options: [
                "A) To maintain emotional balance during crisis",
                "B) To dominate the most important part of a field, debate, or market",
                "C) To mediate between opposing parties",
                "D) To remain neutral in a conflict"
            ],
            correct: 1,
            explanation: "In chess, controlling the center squares (d4, d5, e4, e5) provides maximum mobility. The idiom means dominating the key area of any competitive arena."
        },
        {
            id: 10,
            section: 1,
            type: "blank",
            question: "The veteran diplomat, known for her ability to shape elections without seeking office herself, was widely regarded as the ultimate ________ in regional politics.",
            hint: false,
            options: [
                "A) pawn sacrifice",
                "B) kingmaker",
                "C) grandmaster",
                "D) passed pawn"
            ],
            correct: 1,
            explanation: "A kingmaker in chess can decide which king survives. The idiom refers to someone who determines who holds power without seeking it themselves."
        },

        // === SECTION 2: Middlegame Manoeuvres (11-25) ===
        {
            id: 11,
            section: 2,
            type: "definition",
            question: "What is an \"opening gambit\"?",
            hint: false,
            options: [
                "A) A final desperate attempt to win",
                "B) A defensive strategy to protect one's position",
                "C) An initial move involving calculated risk to gain later advantage",
                "D) A request to restart negotiations"
            ],
            correct: 2,
            explanation: "In chess, a gambit offers material sacrifice for positional or developmental advantage. The idiom describes any risky opening move designed for future payoff."
        },
        {
            id: 12,
            section: 2,
            type: "blank",
            question: "The startup founder ________ her modest savings account—knowing that losing this safety net could bankrupt her personally, but might attract the venture capital her company desperately needed.",
            hint: false,
            options: [
                "A) castled into",
                "B) made a pawn sacrifice of",
                "C) put in check by",
                "D) forked between"
            ],
            correct: 1,
            explanation: "A pawn sacrifice in chess deliberately gives up a minor piece for strategic benefit. The idiom describes allowing a small loss for greater gain."
        },
        {
            id: 13,
            section: 2,
            type: "definition",
            question: "What does it mean to \"castle into safety\"?",
            hint: false,
            options: [
                "A) To attack from multiple directions simultaneously",
                "B) To seek shelter or consolidate one's position quickly",
                "C) To trade aggressive positions for defensive ones",
                "D) To surrender before total defeat"
            ],
            correct: 1,
            explanation: "Castling is chess's only move involving two pieces, tucking the king behind a protective wall of pawns. The idiom means securing oneself rapidly."
        },
        {
            id: 14,
            section: 2,
            type: "blank",
            question: "Despite starting as an intern with no connections, Maria's innovation and relentless networking helped her ________ to become the youngest C-suite executive in company history.",
            hint: false,
            options: [
                "A) sweep the board",
                "B) promote",
                "C) control the centre",
                "D) play for a draw"
            ],
            correct: 1,
            explanation: "Pawn promotion in chess transforms the humblest piece into a queen. The idiom describes elevating someone from humble beginnings to great success."
        },
        {
            id: 15,
            section: 2,
            type: "definition",
            question: "What does \"to be in check\" mean in a business or political context?",
            hint: false,
            options: [
                "A) To be thoroughly audited or investigated",
                "B) To be under pressure or threat that demands immediate response",
                "C) To be partnered with a powerful ally",
                "D) To be protected by legal safeguards"
            ],
            correct: 1,
            explanation: "When a king is in check, it must escape immediately or the game ends. The idiom describes being under urgent threat requiring action."
        },
        {
            id: 16,
            section: 2,
            type: "blank",
            question: "The constitutional framers designed ________ to ensure that no single branch of government—executive, legislative, or judicial—could accumulate excessive power.",
            hint: false,
            options: [
                "A) a pawn structure",
                "B) checks and balances",
                "C) positional advantage",
                "D) perpetual threats"
            ],
            correct: 1,
            explanation: "Drawing from chess's check (threat to king), this system ensures mutual oversight where each branch can restrain the others."
        },
        {
            id: 17,
            section: 2,
            type: "definition",
            question: "What is a \"forced move\"?",
            hint: false,
            options: [
                "A) A strategic choice among equally good options",
                "B) An action one is compelled to take with no better alternatives",
                "C) A surprise attack that catches opponents unprepared",
                "D) A voluntary sacrifice for team benefit"
            ],
            correct: 1,
            explanation: "In chess, a forced move is the only legal response to a threat. The idiom describes situations where limited options leave no real choice."
        },
        {
            id: 18,
            section: 2,
            type: "blank",
            question: "Analysts called the engineer's elegant solution to the bridge collapse risk ________—simple, unexpected, and devastatingly effective against a problem that had stumped experts for months.",
            hint: false,
            options: [
                "A) a blunder",
                "B) a brilliant move",
                "C) time trouble",
                "D) playing both sides"
            ],
            correct: 1,
            explanation: "A brilliant move in chess exceeds expectations and changes the game's course. The idiom celebrates exceptionally clever and effective actions."
        },
        {
            id: 19,
            section: 2,
            type: "definition",
            question: "What does \"to blunder\" mean?",
            hint: false,
            options: [
                "A) To take a calculated risk that fails",
                "B) To make a stupid or careless mistake with serious consequences",
                "C) To deliberately confuse opponents with misdirection",
                "D) To move slowly and methodically"
            ],
            correct: 1,
            explanation: "In chess, a blunder is a catastrophic oversight that loses material or position immediately. The idiom describes any serious careless error."
        },
        {
            id: 20,
            section: 2,
            type: "blank",
            question: "Realizing they couldn't win the contract outright, the smaller firm decided to ________—proposing a joint venture that would at least preserve some market presence.",
            hint: false,
            options: [
                "A) sweep the board",
                "B) play for a draw",
                "C) promote aggressively",
                "D) castle into obscurity"
            ],
            correct: 1,
            explanation: "Playing for a draw in chess abandons winning attempts to secure half a point. The idiom means pursuing neutral outcomes rather than victory."
        },
        {
            id: 21,
            section: 2,
            type: "definition",
            question: "What does it mean \"to resign oneself to something\"?",
            hint: false,
            options: [
                "A) To formally submit one's resignation from a position",
                "B) To reluctantly accept something undesirable because it cannot be changed",
                "C) To renew one's commitment to a difficult goal",
                "D) To sign a binding agreement under pressure"
            ],
            correct: 1,
            explanation: "In chess, resigning acknowledges inevitable defeat. The idiom describes accepting unpleasant realities that cannot be altered."
        },
        {
            id: 22,
            section: 2,
            type: "blank",
            question: "The environmental lawyer, initially dismissed as inexperienced, proved to be ________ whose obscure procedural knowledge ultimately derailed the corporate defense.",
            hint: false,
            options: [
                "A) a pawn in the system",
                "B) a dark-horse bishop",
                "C) a perpetual threat",
                "D) a time trouble victim"
            ],
            correct: 1,
            explanation: "Bishops often become powerful in late-game positions their diagonal movement opens unexpectedly. The idiom describes underestimated people who prove influential."
        },
        {
            id: 23,
            section: 2,
            type: "definition",
            question: "What is \"attacking on the flanks\"?",
            hint: false,
            options: [
                "A) Direct confrontation with main competitors",
                "B) Approaching a problem from unconventional or indirect angles",
                "C) Seeking support from peripheral stakeholders",
                "D) Avoiding conflict through diplomatic channels"
            ],
            correct: 1,
            explanation: "In chess, flank attacks (a-, b-, g-, h-files) bypass central confrontation. The idiom describes indirect approaches to challenges."
        },
        {
            id: 24,
            section: 2,
            type: "blank",
            question: "Now that he's passed the bar exam and secured a clerkship with a federal judge, young David is ________ on a clear path to partnership at a major firm.",
            hint: false,
            options: [
                "A) in stalemate",
                "B) a passed pawn",
                "C) castling into safety",
                "D) playing for a draw"
            ],
            correct: 1,
            explanation: "A passed pawn in chess has no enemy pawns blocking its path to promotion. The idiom describes someone with unobstructed potential for advancement."
        },
        {
            id: 25,
            section: 2,
            type: "definition",
            question: "What does \"the opening\" refer to in a metaphorical sense?",
            hint: false,
            options: [
                "A) A job vacancy or career opportunity",
                "B) The initial stage of any process or competition",
                "C) A gap in someone's argument or defense",
                "D) The first round of negotiations"
            ],
            correct: 1,
            explanation: "Chess openings establish the game's framework through the first dozen moves. The idiom describes any process's critical early phase."
        },

        // === SECTION 3: Endgame Expressions (26-35) ===
        {
            id: 26,
            section: 3,
            type: "definition",
            question: "What is \"the endgame\"?",
            hint: false,
            options: [
                "A) The most complex middle phase of a project",
                "B) The final stage where decisive actions secure outcomes",
                "C) A series of delaying tactics to avoid defeat",
                "D) The ceremonial conclusion of negotiations"
            ],
            correct: 1,
            explanation: "Chess endgames feature few pieces and concrete calculation. The idiom describes any process's final decisive phase where outcomes are determined."
        },
        {
            id: 27,
            section: 3,
            type: "blank",
            question: "After the data breach, the CTO spent weeks ________, constantly reacting to new vulnerabilities rather than implementing proactive security measures.",
            hint: false,
            options: [
                "A) controlling the centre",
                "B) on the defensive",
                "C) moving the pieces",
                "D) seeing several moves ahead"
            ],
            correct: 1,
            explanation: "A defensive position in chess responds to opponent's threats rather than creating one's own. The idiom describes reactive rather than proactive stances."
        },
        {
            id: 28,
            section: 3,
            type: "definition",
            question: "What does \"to counter-attack\" mean?",
            hint: false,
            options: [
                "A) To surrender territory to consolidate elsewhere",
                "B) To respond to an attack with an attack of one's own",
                "C) To request third-party mediation",
                "D) To delay response while gathering intelligence"
            ],
            correct: 1,
            explanation: "A chess counter-attack meets threats with active play rather than passive defense. The idiom describes aggressive responses to aggression."
        },
        {
            id: 29,
            section: 3,
            type: "blank",
            question: "The investigative journalist's exposé ________ the senator—simultaneously exposing his financial misconduct and revealing his chief of staff as a foreign agent.",
            hint: true,
            options: [
                "A) put in check",
                "B) skewered",
                "C) forked",
                "D) pinned down"
            ],
            correct: 1,
            explanation: "A skewer in chess attacks two pieces in a line; moving the first exposes the second. The idiom means exposing multiple vulnerabilities simultaneously. (This one's tricky!)"
        },
        {
            id: 30,
            section: 3,
            type: "definition",
            question: "What does \"to fork someone\" mean in negotiation or argument?",
            hint: true,
            options: [
                "A) To collaborate closely with them as an equal partner",
                "B) To present someone with two equally undesirable choices",
                "C) To divide their attention between multiple priorities",
                "D) To merge two competing proposals into one"
            ],
            correct: 1,
            explanation: "A knight fork in chess attacks two pieces simultaneously. The idiom describes creating dilemmas where all options are bad. (This one's tricky!)"
        },
        {
            id: 31,
            section: 3,
            type: "blank",
            question: "With debt mounting and creditors closing in, the entrepreneur felt ________—any move to secure one loan would default on another, immobilizing him completely.",
            hint: false,
            options: [
                "A) in checkmate",
                "B) pinned down",
                "C) swept from the board",
                "D) grandmastered"
            ],
            correct: 1,
            explanation: "A pinned piece in chess cannot move without exposing something more valuable. The idiom describes being trapped with no safe options."
        },
        {
            id: 32,
            section: 3,
            type: "definition",
            question: "What is \"a brilliant combination\"?",
            hint: false,
            options: [
                "A) A lucky sequence of unrelated successes",
                "B) A sequence of coordinated actions leading to successful outcome",
                "C) The merger of two competing organizations",
                "D) A complex but ultimately failed strategy"
            ],
            correct: 1,
            explanation: "A combination in chess is a forced sequence of moves, often involving sacrifice, that achieves a decisive result. The idiom describes orchestrated successful plans."
        },
        {
            id: 33,
            section: 3,
            type: "blank",
            question: "Facing the product launch deadline with coding unfinished and marketing materials unapproved, the team was in serious ________—rushing decisions that normally required careful thought.",
            hint: false,
            options: [
                "A) positional advantage",
                "B) time trouble",
                "C) perpetual check",
                "D) opening preparation"
            ],
            correct: 1,
            explanation: "Time trouble in chess means having insufficient time to find best moves. The idiom describes deadline pressure causing rushed decisions."
        },
        {
            id: 34,
            section: 3,
            type: "definition",
            question: "What does \"to have the initiative\" mean?",
            hint: false,
            options: [
                "A) To have started a project before competitors",
                "B) To be directing events and forcing others to react",
                "C) To have secured initial funding for a venture",
                "D) To possess creative or innovative ideas"
            ],
            correct: 1,
            explanation: "The initiative in chess belongs to the player creating threats that demand response. The idiom means controlling the agenda while others respond."
        },
        {
            id: 35,
            section: 3,
            type: "blank",
            question: "Though neither candidate had secured a majority, Senator Chen's early endorsements and ground organization gave her ________ that would prove decisive as undecided voters chose sides.",
            hint: false,
            options: [
                "A) a brilliant blunder",
                "B) a positional advantage",
                "C) a poisoned pawn",
                "D) touch-move obligations"
            ],
            correct: 1,
            explanation: "Positional advantage in chess means superior piece placement without immediate tactical win. The idiom describes favorable underlying circumstances."
        },

        // === SECTION 4: Grandmaster's Gambit (36-40) ===
        {
            id: 36,
            section: 4,
            type: "definition",
            question: "What does \"to play both sides against the middle\" mean?",
            hint: false,
            options: [
                "A) To maintain neutrality between extreme positions",
                "B) To secretly encourage opposing parties for personal benefit",
                "C) To alternate between aggressive and defensive strategies",
                "D) To negotiate simultaneously with multiple competitors"
            ],
            correct: 1,
            explanation: "This sophisticated idiom describes manipulating opposing factions so their conflict advances one's own interests—a true grandmaster's strategy."
        },
        {
            id: 37,
            section: 4,
            type: "blank",
            question: "The tech giant's offer to acquire the startup at twice its valuation seemed generous, but veterans recognized it as ________—accepting would trigger non-compete clauses that would destroy the founders' future careers.",
            hint: true,
            options: [
                "A) a queen sacrifice",
                "B) a zwischenzug",
                "C) a poisoned pawn",
                "D) a passed pawn opportunity"
            ],
            correct: 2,
            explanation: "A poisoned pawn in chess is material that, if captured, leads to ruinous position. The idiom describes tempting offers with hidden fatal consequences. (This one's tricky!)"
        },
        {
            id: 38,
            section: 4,
            type: "definition",
            question: "What is \"the touch-move rule\" in metaphorical usage?",
            hint: true,
            options: [
                "A) The obligation to complete any action once publicly committed",
                "B) The principle that decisions, once acted upon, cannot be taken back",
                "C) The requirement to consult others before major choices",
                "D) The strategy of testing waters before full commitment"
            ],
            correct: 1,
            explanation: "In chess, touched pieces must be moved. The idiom describes situations where commitment eliminates retreat options. (This one's tricky!)"
        },
        {
            id: 39,
            section: 4,
            type: "blank",
            question: "Rather than being intimidated by her rival's reputation, the young champion focused on the objective position—embodying the wisdom to ________, analyzing only the evidence before her.",
            hint: true,
            options: [
                "A) control the center",
                "B) play the board, not the opponent",
                "C) simplify to a winning endgame",
                "D) always have the initiative"
            ],
            correct: 1,
            explanation: "This profound chess wisdom advises focusing on objective circumstances rather than opponents' psychology or reputation. (This one's tricky!)"
        },
        {
            id: 40,
            section: 4,
            type: "blank",
            question: "When the committee tried to force his hand on the funding vote, Representative Okonkwo executed a perfect ________—unexpectedly supporting a competing amendment first, which completely changed the legislative math before returning to the original issue.",
            hint: true,
            options: [
                "A) pawn promotion",
                "B) zwischenzug",
                "C) perpetual check",
                "D) castling maneuver"
            ],
            correct: 1,
            explanation: "A zwischenzug (German: \"in-between move\") is an unexpected intermediate action that changes everything before addressing the apparent main issue. (This one's tricky!)"
        }
    ],

    masterList: [
        { idiom: "A blunder", definition: "A stupid or careless mistake with serious consequences." },
        { idiom: "A brilliant combination", definition: "A sequence of coordinated actions leading to a successful outcome." },
        { idiom: "A brilliant move", definition: "An exceptionally clever and effective action." },
        { idiom: "A chess game", definition: "A complex situation requiring strategic planning and careful thinking." },
        { idiom: "A dark-horse bishop / A powerful rook", definition: "A person or element whose true power or influence is underestimated or becomes apparent later." },
        { idiom: "A forced move", definition: "An action one is compelled to take, with no better alternatives." },
        { idiom: "A gambit / An opening gambit", definition: "An initial move or remark involving calculated risk to gain later advantage." },
        { idiom: "A grandmaster of something", definition: "An absolute expert in a particular field requiring strategy." },
        { idiom: "A kingmaker", definition: "A person or group with the power to decide who will win a contest for leadership, without seeking the position themselves." },
        { idiom: "A pawn in someone's game", definition: "To be used or manipulated by someone else for their own purposes." },
        { idiom: "A pawn sacrifice", definition: "Deliberately allowing a minor asset to be lost to achieve a greater strategic goal." },
        { idiom: "A passed pawn", definition: "An individual or project that has overcome obstacles and is on a clear path to success." },
        { idiom: "A perpetual threat", definition: "A persistent problem or source of pressure that constantly demands attention." },
        { idiom: "A pinned position / To be pinned down", definition: "To be trapped or immobilized, unable to move without making things worse." },
        { idiom: "A poisoned pawn", definition: "An offer or opportunity that is tempting but, if accepted, leads to ruin." },
        { idiom: "A positional advantage", definition: "A better overall setup or long-term strategic footing, even without an immediate win." },
        { idiom: "A queen sacrifice", definition: "A dramatic and costly sacrifice for a potentially game-winning advantage." },
        { idiom: "A strategic move", definition: "A carefully planned action to achieve a long-term goal." },
        { idiom: "An opening", definition: "The initial stage of any process or competition." },
        { idiom: "Attack on the flanks / A flanking manoeuvre", definition: "To approach a problem or challenge from an unconventional or indirect angle." },
        { idiom: "Back to square one", definition: "To return to the beginning or to start over." },
        { idiom: "Check and balance", definition: "A system where different powers control each other to prevent any one from becoming too strong." },
        { idiom: "Checkmate", definition: "A situation where someone has been completely defeated or has no more options." },
        { idiom: "Counter-attack", definition: "To respond to an attack with an attack of one's own." },
        { idiom: "Endgame", definition: "The final stage of a process, where decisive actions are taken to secure an outcome." },
        { idiom: "Fork (to fork someone)", definition: "To present someone with two equally undesirable choices; to attack on two fronts simultaneously." },
        { idiom: "Have the initiative", definition: "To be the one directing the course of events, forcing others to react." },
        { idiom: "In check", definition: "To be under pressure, threat, or scrutiny that demands a response." },
        { idiom: "It's your move", definition: "It's someone's turn to make a decision or take action." },
        { idiom: "Make the first move", definition: "To take the initiative in a situation." },
        { idiom: "Move up the rank(s)", definition: "To achieve a higher position within a hierarchy." },
        { idiom: "On the defensive", definition: "To be forced to react to problems or attacks rather than controlling events." },
        { idiom: "Play both sides (against the middle)", definition: "To secretly support or encourage opposing parties for one's own benefit." },
        { idiom: "Play for a draw", definition: "To adopt a strategy aimed at achieving a tie or neutral outcome, rather than victory." },
        { idiom: "Play the board, not the opponent", definition: "To make decisions based on objective facts, not emotions or rival's personality." },
        { idiom: "Political/corporate chessboard", definition: "The complex competitive landscape where many players interact strategically." },
        { idiom: "Promote (a pawn)", definition: "To elevate a humble beginning or junior person to a position of great power or success." },
        { idiom: "Resign oneself to something", definition: "To reluctantly accept something undesirable because one cannot change it." },
        { idiom: "Skewer (to skewer someone)", definition: "To expose and critically undermine someone's position or argument." },
        { idiom: "Stalemate", definition: "To be in a deadlock or situation where no progress can be made by either side." },
        { idiom: "Sweep the board", definition: "To win decisively, taking everything." },
        { idiom: "The opening (phase)", definition: "The initial stage of any process or competition." },
        { idiom: "Time trouble / Time pressure", definition: "Working against a tight deadline, leading to rushed decisions." },
        { idiom: "To castle (into safety)", definition: "To seek shelter or consolidate one's position, often quickly." },
        { idiom: "To control the centre", definition: "To dominate the most important part of a field, debate, or market." },
        { idiom: "To move the pieces (behind the scenes)", definition: "To control events secretly from a position of power." },
        { idiom: "Touch-move rule", definition: "The principle that a decision, once acted upon, cannot be taken back." },
        { idiom: "Zwischenzug", definition: "A clever, unexpected intermediate action that changes the situation." }
    ]
};
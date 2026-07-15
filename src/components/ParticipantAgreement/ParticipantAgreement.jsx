
import { useContext, useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import Signature from "../Signature/Signature";
import "./ParticipantAgreement.css";
import { useNavigate } from "react-router";
import { DocumentContext } from "../Context/DocumentContext";

const ParticipantAgreement = () => {

    const formData = JSON.parse(sessionStorage.getItem("formData") || {});

    const navigate = useNavigate();
    const required = ["firstName", "lastName", "birthMonth", "birthDate", "birthYear", "addressLine1", "city", "state", "zipCode", "email", "phoneNumber", "eName", "ePhoneNumber"];

    useEffect(() => { required.some(key => formData[key] === "") && navigate("/") }, []);

    const { pendingDocuments, updatePendingDocuments } = useContext(DocumentContext);
    const [initialState, updateInitialState] = useState(null);
    const [signatureState, updateSignatureState] = useState(null);
    const [initialVisibility, updateInitialVisibility] = useState("absent");
    const [signatureVisibility, updateSignatureVisibility] = useState("absent");
    const [hasConsented, updateHasConsented] = useState(false);
    const initialRef = useRef(null);
    const signatureRef = useRef(null);
    const checkRef = useRef(null);

    const viewPad = (updateVisibility) => {
        updateVisibility("")
    }

    const { firstName, middleName, lastName } = formData;
    const fullName = [firstName, middleName, lastName].map(name => name && name.trim()).filter(Boolean).join(" ");

    const handleSubmit = () => {

        const scrollTo = !initialState ? initialRef : !signatureState ? signatureRef : !hasConsented ? checkRef : null;

        if (scrollTo) {
            scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }

        const { birthYear, birthMonth, birthDate: birthDay, ...restOfForm } = formData;
        const newDoc = { 
            ...restOfForm, 
            birthDate: `${birthYear}-${birthMonth}-${birthDay}`,
            type: "Waiver",
            pendingId: crypto.randomUUID(),
            dateTime: new Date().toISOString()
        };

        updatePendingDocuments(prevDocs => [...prevDocs, newDoc]);
        navigate("/");
    }

    return (
        <section>
            <header>
                <h2>Participant Agreement</h2>
                <h3>MOVEMENT CLIMBING, YOGA & FITNESS</h3>
                <h4>WAIVER, RELEASE OF LIABILITY AND ASSUMPTION OF RISKS</h4>
                <p><strong>Please read this document carefully</strong></p>
                <p><strong>This document must be signed by an adult of at least eighteen years of age</strong></p>
            </header>
            <section>
                <p>The individual named below desires: (a) to use or be granted access to one or more of the Movement Climbing Yoga and Fitness centers (“Facility” or “Facilities”) owned or operated by Movement Holdings, LLC; Planet Granite Holdings, LLC; Movement Climbing & Fitness Holdings LLC; Movement Management, LLC; Earth Treks, LLC; The Cliffs Holdings, LLC; Movement Summit Group, LLC; and/or a direct or indirect subsidiary of any of the foregoing entities (collectively, along with any and all other entities which may be owned, directly or indirectly, through a subsidiary or series of subsidiaries, in whole or part, by any of the foregoing entities, or any parent, affiliate, or equity holder of any of the foregoing entities, and all of their predecessors and successors in interest, the “Climbing Gyms” or “Movement.”); (b) to participate in trips, competitions, camps, climbing courses, adventures, and/or other types of events (collectively, “Events”) which may take place at a Facility or are otherwise sponsored by or involve the Climbing Gyms or the Climbing Gyms’ officers, directors, employees, contractors, agents, affiliated entities, landlords and property managers (together with the Climbing Gyms, collectively, “Released Parties”); and/or (c) to engage in wall climbing, bouldering, other climbing activities, sports, fitness activities, trainings, classes, or any of the various other types of activities (collectively, “Activities”) which may take place at a Facility or are otherwise provided or sponsored by or involve the Climbing Gyms or any of the other Released Parties. All references to the “Facility” throughout this Waiver And Release Of Liability For Any Injury Or Death And Assumption Of Risks (“Release”) includes all rooms, areas, and spaces on the interior of each Facility, the exterior of each Facility, and the parking lot of each Facility. For purposes of this Release only, I agree that the “Events” and “Activities” span from the time that I leave my residence prior to each particular Event or Activity to the time that I return to my residence after the conclusion of that Event or Activity, as the case may be.</p>
                <p>In consideration for the Climbing Gyms permitting me and/or my child (collectively “me,” “I,” or “my”) to use the Facilities, to participate in the Events and/or to engage in the Activities, I have agreed to execute this Release and be bound by the provisions of this Release, except to the extent that injury is caused in a State that is explicitly exempted from an identified provision of this Release.</p>
            </section>
            <section>
                <h5>A. I WAIVE AND RELEASE THE RELEASED PARTIES FROM MY DEATH AND ANY INJURY, ILLNESS, LOSS, DAMAGE, EXPENSE, ACTION, CLAIM, AND LIABILITY ARISING OUT OF ANY USE OF THE FACILITIES, THE PARTICIPATION IN ANY OF THE EVENTS, OR THE ENGAGEMENT IN ANY OF THE ACTIVITIES:</h5>
                <p>I agree to release and discharge the Climbing Gyms and the other Released Parties from liability for my death and any and all past, present, or future injuries, illnesses, losses, damages, expenses, property damage, social losses, economic losses, actions, claims, and liabilities, whether known or unknown, anticipated or unanticipated, suspected or unsuspected, relating to or arising from: (i) the use of any Facility or equipment located at any Facility; (ii) my participation in Events sponsored by or involving any Facility, the Climbing Gyms or any of the other Released Parties; (iii) participation in or observation of the Activities sponsored by or involving any Facility, the Climbing Gyms or any of the other Released Parties; (iv) my interaction with any of the Released Parties; or (v) my placement in the care, custody or control of any of the Released Parties. This Release is intended to release and discharge the Released Parties from any and all losses, damages, expenses, actions, claims and liabilities of any nature whatsoever, such as losses, damages, expenses, actions, claims and liabilities arising from or related to the negligence of, or the breach of any duties which may be owed by, the Released Parties. I understand that this Release prohibits me from filing any lawsuit against any of the Released Parties for any of the reasons identified in this paragraph, now or in the future, and from recovering any losses, damages or expenses against any of the Released Parties. Notwithstanding anything in the foregoing to the contrary, this Section A shall not apply to injuries caused or sustained in the State of New York or the Commonwealth of Virginia and this Section A shall not release the Climbing Gyms from liability associated with their gross negligence or intentional conduct that causes injury in the State of California.</p>
            </section>
            <section>
                <h5>B. I ASSUME THE RISK OF INJURIES, ILLNESSES, OR DEATH ASSOCIATED WITH THE USE OF THE FACILITIES, THE PARTICIPATION IN ANY OF THE EVENTS, OR THE ENGAGEMENT IN ANY OF THE ACTIVITIES:</h5>
                <p>I understand that there are significant elements of risk associated with use of the Facility, participation in the Events, and engagement in the Activities that may be sponsored by or otherwise involve the Facilities, the Climbing Gyms or any of the other Released Parties. I understand and acknowledge that certain risks cannot be eliminated due to the nature of the Events or the Activities, and that these elements and risks may be causes of injury, illness, permanent disability, trauma, or death. These risks and dangers include but are not limited to falling; landing on or striking padded or unpadded surfaces; being injured by falling objects or participants; being injured by the actions or inactions of other participants, including but not limited to other participants’ failure to belay properly; movement of climbing holds; equipment failures of any kind; physical injury as a result of engaging in physical activity; and the contraction of communicable illnesses. I recognize that the foregoing list of risks are examples of the risks that I am assuming by using the Facilities and/or participating in the Events or Activities and that I am also assuming risks not specifically listed above. I recognize that if I encounter these risks, serious injury, illness, or death may result, and I understand that no amount of care, caution, instruction or expertise can eliminate these risks. I acknowledge that using the Facilities, participating in the Events and engaging in the Activities sponsored by or involving the Facilities, Climbing Gyms or any of the other Released Parties involves certain risks, inherent and otherwise, including the risk of death, illness, or serious personal injury, regardless of whether I follow the Climbing Gyms’ safety instructions or recommendations, such as those pertaining to Facility rules and regulations, climbing, bouldering, instructional programs, or involving my choice of equipment to use or whether or not to wear a helmet or any other safety device. I agree to assume all such risks, as well as any other risks involved in using the Facility, participating in Events, and/or engaging in the Activities sponsored by or involving the Climbing Gyms or any of the other Released Parties.</p>
            </section>
            <section>
                <h5>C. I AGREE TO INDEMNIFY, HOLD HARMLESS, AND DEFEND THE RELEASED PARTIES:</h5>
                <p>I further agree, to the fullest extent permitted by applicable law, to indemnify, hold harmless and defend the Released Parties from and against any and all loss, damage, liability, claim and expense, including costs and attorneys’ fees, incurred by any of the Released Parties as a result of my using the Facilities, participating in Events, and/or engaging in Activities sponsored by or involving the Climbing Gyms or any of the other Released Parties, including any loss, damage, liability, claim, and expense arising out of the Climbing Gyms’ own negligence and claims asserted by Me or my agent. I understand that this Section means that I will have to reimburse the Climbing Gyms or any of the other Released Parties for any losses, damages, liabilities, claims, costs, attorneys’ fees, or expenses sustained by the Released Parties as a result of my using any Facility, participating in Events, and/or engaging in Activities sponsored by or involving the Climbing Gyms or any of the other Released Parties.</p>
            </section>
            <section>
                <h5>D. I WAIVE MY RIGHT TO A JURY TRIAL AND CONSENT TO CHOICE OF LAW, ETC.:</h5>
                <p><strong>I SPECIFICALLY WAIVE (AND RELEASED PARTIES, BY ITS ACCEPTANCE HEREOF WAIVES) THE RIGHT TO A TRIAL BY JURY IN ANY ACTION BROUGHT BY OR AGAINST THE CLIMBING GYMS OR ANY OF THE OTHER RELEASED PARTIES, EXCEPT TO THE EXTENT THAT CLAIM ARISES IN THE STATE OF CALIFORNIA.</strong></p>
                <p>The laws of the State in which I use a Facility, participate in an Activity, or participate in an Event shall govern the rights and obligations of the parties to this Release and the interpretation, construction and enforceability of this Release, except that the laws of the State of California shall govern any claims arising out of the use of a Facility, participation in an Activity, or participation in an Event in the State of Oregon. If any dispute shall arise between me and either the Climbing Gyms or any of the other Released Parties, I agree that any lawsuit brought by or on behalf of me against any Released Parties shall be brought solely in a federal or state court located in one of the states where a Facility is located or where an Event or Activity took place (except that all claims arising any Facility, Event, or Activity located in the State of Oregon shall be adjudicated in the federal or state courts located in the State of California). This Release shall be effective upon my execution hereof and shall continue in force, unless sooner terminated pursuant to a written notice, for so long as I or (if applicable) my child or such other below named “Participant” use a Facility, participate in an Event, and/or engage in an Activity sponsored by or involving the Climbing Gyms or any of the other Released Parties.</p>
                <p><strong>For Movement Oregon Locations Only:</strong> I understand that Released Parties offer an option to enter any Facility located in the State of Oregon and participate in any Activity or Event located in the State of Oregon for an additional fee, without signing this or any other Waiver and Release of Liability. I acknowledge that I am aware of this option, do not wish to pay this fee, and accept the full scope of this Waiver and Release of Liability. </p>
            </section>
            <section>
                <h5>E. I PERMIT THE USE OF MY LIKENESS AND THE DISCLOSURE OF MY INFORMATION:</h5>
                <p>I acknowledge and agree that the Climbing Gyms reserve the right to use any photograph, video recording, audio recording, or any other media taken at the Facilities, during Events, or in connection with any of the Activities involving the Climbing Gyms or any of the other Released Parties in connection with the Climbing Gyms and the Released Parties’ promotional materials, brochures and website. I also acknowledge and agree that the Released Parties’ may disclose any or all of my personal information if the Released Parties’ are requested to do so by any governmental agency or authority.</p>
            </section>
            <section>
                <h5>F. SEVERABILITY:</h5>
                <p>If any term, provision, or condition, or any part thereof, of this Release shall for any reason be found or held to be invalid or unenforceable by and court or governmental agency of competent jurisdiction, such invalidity or unenforceability shall not affect the remainder of such term, provision, or condition or any other term, provision, or condition, and this Release shall survive and be construed as if such invalid or unenforceable term, provision or condition had not been contained therein.</p>
            </section>
            <section>
                <p><strong>I HAVE READ AND I UNDERSTAND THE FOREGOING ACKNOWLEDGMENT OF RISK, ASSUMPTION OF RISK AND RESPONSIBILITY, AND RELEASE OF LIABILITY FOR ANY INJURY OR DEATH. I UNDERSTAND THAT BY SIGNING THIS FORM I MAY BE WAIVING VALUABLE LEGAL RIGHTS.</strong></p>
                <p><strong>THIS RELEASE IS A BINDING LEGAL CONTRACT.</strong></p>
                <p><strong>PLEASE READ IT CAREFULLY BEFORE SIGNING.</strong></p>
            </section>
            <section>
                <h5>TEXAS , PENNSYLVANIA, AND NEW YORK FACILITY ORIENTATION</h5>
                <ul>
                    <li>Climbers must pass the appropriate assessment with Movement staff to use or supervise auto belays, top rope belay, lead climb, or lead belay. Proper credentials must be displayed via provided harness tag.</li>
                    <li><strong>Participants are responsible for clipping themselves, or a minor in their care, into auto belay systems. To the extent that the Facility uses a clip in method for top rope climbing as opposed to a tie in method, participants are responsible for clipping themselves, or a minor in their care, into top rope systems.</strong></li>
                    <li><strong>SPEAK OUT</strong>. If you see conduct or circumstances that might cause harm to a climber, such as failure to properly clip into an auto belay, speak up to the climber or tell staff immediately. <strong>If you see something, say something!</strong></li>
                </ul>
            </section>
            <section>
                <h5>Auto Belays</h5>
                <ul>
                    <li>
                        The use of an auto belay does not eliminate the risks of climbing and, in some circumstances, may enhance them. Climbing alone increases risk as participants are solely responsible for their actions and correct use of equipment. <strong>Risks include, but are not limited to:</strong>
                        <ul>
                            <li>
                                <strong>Failure to properly attach the auto belay carabiner to the harness resulting in a ground fall including:</strong>
                                <ul>
                                    <li>failure to clip the auto belay carabiner to the correct harness attachment point.</li>
                                    <li>failure to ensure the auto belay carabiner is fully closed.</li>
                                    <li><strong>failure to remember to attach the auto belay carabiner to the harness and climb with no protection.</strong></li>
                                </ul>
                            </li>
                            <li>Entanglement and / or failure of the auto belay line to retract.</li>
                            <li>Failure of the line or carabiner connection to the auto belay.</li>
                            <li>Failure of the auto belay device to brake or slow descent.</li>
                            <li>Taking a swinging fall and striking the wall, a hold or another climber.</li>
                            <li>Landing on or being landed on by a descending climber. Do not stand, sit, walk or climb below other climbers.</li>
                        </ul>
                    </li>
                    <li><strong>Auto belay Participants under the age of 14 must be supervised by an adult (18 years or older) or by a staff member.</strong> The supervising adult must perform a safety check prior to the climber leaving the ground for each climb. This check must be repeated for each climb, regardless of whether the climber has unclipped or not from the last climb.</li>
                    <li>Auto belays can only be used by one Participant at a time. Auto belay Participants must range in weight from 25- 310 lbs per manufacturer guidelines.</li>
                    <li>
                        <strong>With each climb:</strong>
                        <ul>
                            <li>Make sure your harness is properly fitted and secured.</li>
                            <li>Pull down on webbing line to check for proper tension and webbing retraction.</li>
                            <li>Connect the auto belay’s carabiner to the belay loop on the harness. Ensure that the carabiner gate is fully closed, and nothing is obstructing the gate.</li>
                            <li><strong>A final inspection of the climber’s harness, carabiner and attachment point must be completed by the climber or, in the case of a climber under the age of 14, an adult supervisor. A safety check from a staff member or another oriented adult is recommended.</strong></li>
                            <li>If the auto belay line fails to retract during climbing or you become aware that you failed to clip in properly, stop climbing immediately and request assistance.</li>
                            <li>Always climb underneath the auto belay. Never climb alongside or above the auto belay as a swinging or free fall will occur. Never start your descent from above the auto belay.</li>
                            <li>At the top look down to ensure the landing zone and descent path are free of people and obstructions.</li>
                            <li>Always descend feet first, look below you, and prepare for landing.</li>
                            <li>Once you are done climbing, clip the auto belay carabiner back into the anchor point on the belay gate or wall.</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section>
                <h5>BOULDERING ORIENTATION</h5>
                <ul>
                    <li><strong>I certify that I will watch the Bouldering Orientation video, confirm that I watched it to a staff member, and ask any questions that I may have prior to participating in any activities.</strong> In addition to viewing the Bouldering Orientation Video, I acknowledge that an in-person Facility and Bouldering Orientation with Movement staff is available upon request. If the participant is a minor, and this agreement is signed by a parent or legal guardian, I as the parent or legal guardian understand that it is my responsibility to review the video and orientation materials and provide the information therein to my child.</li>
                    {initialState && <img className="participantagreement-sig" src={initialState}/>}
                    <div ref={initialRef}><Button text={initialState ? "Edit Initial" : "Click to Initial"} onClick={() => viewPad(updateInitialVisibility)} /></div>
                    <Signature 
                        label="Initials"
                        updateState={updateInitialState}
                        updateVisibility={updateInitialVisibility}
                        absent={initialVisibility}
                    />
                    <li>Bouldering (un-roped climbing) is permitted in designated bouldering areas, or no higher than 4 feet (foot height) in areas designated for roped climbing.</li>
                    <li><strong>Bouldering involves increased risks because YOU WILL FALL, and all falls are ground falls which could result in injury or death.</strong> Padded floors and crash pads (where present) do not and cannot guarantee prevention of injury or death. Improper pad placement or improper pad use can also cause injury or death. Injury is more likely when you fall near or at the top of the wall and / or when you miss the crash pad or hit an edge of a crash pad.</li>
                    <li>
                        To reduce your risk of injury:
                        <ul>
                            <li>Down climb when possible instead of jumping off.</li>
                            <li>Before each climb, position crash pads (where present) so that you will land in the middle of the pad.</li>
                            <li>Use a spotter to help position crash pads (where present) and promote a clear landing zone.</li>
                        </ul>
                    </li>
                    <li>Keep Landing Zones Clear: Do not lounge on pads or walk under climbers. Remove all personal items (like water bottles) from landing zones. Be aware at all times because you could land on or be landed on by other participants.</li>
                    <li>
                        Proper Falling Technique Can Reduce Injuries:
                        <ul>
                            <li>First, upon falling from the wall, spot your landing.</li>
                            <li>Second, stay relaxed and bend your knees and elbows.</li>
                            <li>Next, pull in your arms. Avoid extending your arms to reach for the floor.</li>
                            <li>Lastly, as you land, absorb the impact with your legs bent and roll to the ground.</li>
                        </ul>
                    </li>
                    <li>Ratings: Boulder problems are rated using the V-Scale (V-Intro, V0, V1, V2, V3, etc) with V-Intro being the easiest. At some locations, “V” scale grades are identified by hold or tag color.</li>
                    <li>Top-Out Bouldering: Top out bouldering is permitted in designated areas only. It involves summiting a bouldering wall then proceeding to the designated down climbing area. Use designated descent paths / ladders only and descend slowly and carefully. Topping out increases risk.</li>
                    <li>New Climbers: Those who are new to bouldering should start with easier problems (V-Intro and V0) and avoid climbing the full height of the wall until they are more comfortable with climbing, down climbing, proper falling technique, and how to utilize crash pads (where present).</li>
                    <li>While Movement takes substantial measures to mitigate the risks of Bouldering, all risks cannot be eliminated. Risks of injury and death are present even when you and Movement take all available safety measures.</li>
                </ul>
            </section>
            <section>
                <h5>FACILITY ORIENTATION</h5>
                <ul>
                    <li>All climbers and observers must check in at the front desk before proceeding into the facility.</li>
                    <li>Climbing is dangerous and there are inherent risks. Participants and observers must assume the risks of climbing and entering the facility. All climbers, participants, observers, individuals operating a safety system, and anyone proceeding past the check in area must sign (or their parent/guardian must sign) the Waiver, Release of Liability and Assumption of Risks form.</li>
                    <li>Double check your partner’s safety system (Knots / Harness / Carabiners / Belay Device) before every climb! Staff reserves the right to check safety systems at any time. Individuals who choose to bring and use their own equipment must assume and accept all responsibility for the proper selection, use, care, inspection, and maintenance of that equipment.</li>
                    <li>Individuals desiring to top rope belay, lead belay, or lead climb must be at least 13 years of age and pass the corresponding Belay Check. Proper credentials must be displayed via provided harness tag. Those individuals who do not pass or choose to not take the Belay Check may not belay or tie knots and must wait a minimum of 24 hours before taking or re-taking the Belay Check. Individuals who have passed the Lead Climb Check may borrow a lead rope at the front desk (where available), or use a personal rope provided it’s a single UIAA approved rope at least 40 meters in length. Staff reserves the right to revoke belay privileges at any time. Limited exceptions to the age requirement are made for climbing team members.</li>
                    <li>Weight differences between the climber and the belayer can greatly impact the safety of both individuals.</li>
                    <li>All persons using the facility are expected to respect other individuals and conduct themselves in good order. Participation in climbing or fitness activities while under the influence of drugs or alcohol is not permitted. Persons deemed by staff to be behaving in an unsafe or disorderly fashion will be asked to leave the facility. I understand that staff are not responsible for enforcing any rules in the facility.</li>
                    <li>Youth: Youth climbers under the age of 13 must be supervised by an adult (18 years or older) or by a staff member. Youth under the age of 13 are not permitted in fitness areas. Parents and caregivers are responsible for the supervision of their children. Limited exceptions to the fitness area age requirement are made for climbing team members. Additional age restrictions and exceptions may apply by activity, program, or Facility.</li>
                </ul>
            </section>
            <section>
                <h5>ACKNOWLEDGEMENT</h5>
                <p>I acknowledge, for myself and any minor child or children on whose behalf I have signed the Movement Climbing, Yoga, & Fitness (“Climbing Gym”) Waiver, Release Of Liability And Assumption Of Risks form (“Release”) or, if applicable, the Movement Climbing, Yoga & Fitness Assumption of Risks and Indemnification (“Assumption of Risks”), that: (a) I have read the Release or Assumption of Risks and I fully understand all of the terms of the Release or Assumption of Risks; (b) I agree that nothing in the Bouldering Orientation, Facility Orientation, or Texas, Pennsylvania and New York Facility Orientation unto which this Acknowledgment is attached shall be construed to alter, modify, or extinguish any element of the Release or Assumption of Risks, or any agreement made by me thereunder; (c) I understand that I or such minor child or children identified as the “Participant” on the Release or Assumption of Risks require orientation and/or training before participating in climbing and bouldering activities in an Climbing Gym facility; (d) I understand that Climbing Gym may require me to pass an assessment or assessments prior to allowing me or such Participant to participate in certain activities; (e) I understand that if I or such Participant need(s) additional assistance, orientation, instruction, training or assessment during my or such Participant’s participation at an Climbing Gym facility at any future time, then it is my responsibility to seek such assistance, orientation, instruction, training or assessment from the Climbing Gym staff prior to participating in any activity for which I am not, or such Participant is not, trained or qualified; and (f) my signature indicates that I understand the information and acknowledgments set forth above.</p>
                {signatureState && <img className="participantagreement-sig" src={signatureState}/>}
                <div ref={signatureRef}><Button text={signatureState ? "Edit Signature" : "Click to Sign"} onClick={() => viewPad(updateSignatureVisibility)} /></div>
                <Signature 
                    label="Signature"
                    updateState={updateSignatureState}
                    updateVisibility={updateSignatureVisibility}
                    absent={signatureVisibility}
                />
                <p>{fullName}</p>
            </section>
            <section>
                <p ref={checkRef}>
                    <input type="checkbox" checked={hasConsented} onChange={() => updateHasConsented(!hasConsented)} required></input>
                    By checking here, you are consenting to the use of your electronic signature in lieu of an original signature on paper. You have the right to request that you sign a paper copy instead. By checking here, you are waiving that right. After consent, you may, upon written request to us, obtain a paper copy of an electronic record. No fee will be charged for such copy and no special hardware or software is required to view it. Your agreement to use an electronic signature with us for any documents will continue until such time as you notify us in writing that you no longer wish to use an electronic signature. There is no penalty for withdrawing your consent. You should always make sure that we have a current email address in order to contact you regarding any changes, if necessary.
                </p>
            </section>
            <Button text="Submit Agreement" onClick={handleSubmit} />
        </section>
    )
}

export default ParticipantAgreement;
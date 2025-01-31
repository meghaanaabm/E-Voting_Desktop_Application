import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Amazing Features</div>
      <div className="title-small">
        amazing features of our electronic voting system.
      </div>

      <div className="mobile-wrapper">
        <div>
          <Feature title="Immutability" icon={<MdLock />} align="right">
            <p>
              Immutability means something that can’t be changed or altered.
              This is one of the top blockchain features that help to ensure
              that the technology will remain as it is, a permanent, unalterable
              network.
            </p>
          </Feature>
        </div>

        <div className="mobile-container">
          <img src="/mobile.png" />
        </div>

        <div>
          <Feature title="Enhanced Security" icon={<MdGppGood />} align="left">
            <p>
            An enhanced security blockchain-based e-voting system leverages the decentralized and immutable nature of blockchain technology to ensure the integrity, transparency, and security of the voting process. By using cryptographic techniques, it secures voter identities, prevents double voting, and guarantees that votes cannot be tampered with once recorded on the blockchain. 
            </p>
          </Feature>
        </div>
        <div>
          <Feature title="Decentralized" icon={<MdShare />} align="right">
            <p>
            The decentralized nature of blockchain ensures that data is distributed across a network of nodes, 
            eliminating the need for a central authority. This enhances security, transparency, 
            and resilience, as changes to the blockchain require consensus from the majority, 
            making it highly resistant to tampering and single points of failure.
            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="Distributed Ledger"
            icon={<MdLibraryAddCheck />}
            align="left"
          >
            <p>
            A distributed ledger is a database shared across multiple locations or participants, 
            ensuring transparency and security. Each entry is cryptographically secured and synchronized across the network,
            preventing unauthorized modifications.
            This decentralized structure eliminates single points of failure and allows for real-time, tamper-proof record-keeping.
            </p>
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;

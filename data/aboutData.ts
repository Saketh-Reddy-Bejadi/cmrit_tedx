export interface AboutData{
    logoValue:{
        scale:number;
        pad:number;
        x:boolean;
        text:boolean;
        space:number;
    };
    description:string;
  }
  
  export const aboutData:AboutData[]=[
    {
      logoValue:{scale:1.5,pad:80,x:false,text:false,space:25},
      description: "is a global platform where ideas have the power to change the world. Founded in 1984,TED brings together visionaries, innovators, and thought leaders to share insights that challenge,inspire, and transform. Covering everything from science and technology to art and human potential,TED's mission—“Ideas Worth Spreading”—fuels conversations that break barriers, spark action,and redefine the future.",
    },
    {
      logoValue:{scale:1.5,pad:80,x:true,text:false,space:50},
      description: "is an independently organized extension of TED's global mission spreading ideas that inspire and transform. Held in communities worldwide, TEDx events bring together thinkers,innovators, and storytellers to share powerful ideas that challenge perspectives and spark change.With the same spirit as TED, but on a local scale, TEDx creates a space where curiosity meets action, and ideas become movements.",
    },
    {
      logoValue:{scale:1.5,pad:50,x:true,text:true,space:38},
      description: "is a platform dedicated to sparking conversations, challenging perspectives, and inspiring change. Rooted in the spirit of TED, it brings together visionaries, innovators, and storytellers to share ideas that ignite minds and push boundaries. From groundbreaking technology to the depths of human resilience, every talk serves as a catalyst for transformation—breaking stereotypes, reshaping mindsets, and driving action. At TEDxCMRIT Hyderabad, we believe a single idea can create ripples that transcend time, fostering a world where curiosity meets possibility. This is where thoughts evolve into movements.",
    },
  
  ]
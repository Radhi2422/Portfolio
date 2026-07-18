const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      enum: [
        "dotnet",
        "mern",
        "dsa",
        "java",
        "javascript"
      ],
      default: "Other",
    },

    shortDescription: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    technologies: [
      {
        type: String,
      },
    ],

    features: [
      {
        type: String,
      },
    ],

    github: {
      type: String,
      default: "",
    },

    liveDemo: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      enum: [
        "Web",
        "Mobile",
        "Backend",
        "Frontend",
        "Full Stack",
        "AI/ML",
        "DevOps",
        "Other",
      ],
      default: "Other",
    },

    status: {
      type: String,
      enum: ["Completed", "In Progress", "Planned"],
      default: "Completed",
    },

    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection:"projectModels",
    timestamps: true,
  }
);

module.exports = mongoose.model("projectModels", projectSchema);
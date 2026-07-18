import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataStructurePage.css";

const topics = [
  { name: "Arrays", path: "arrays", icon: "📦" },
  { name: "Strings", path: "strings", icon: "🔤" },
  { name: "Linked List", path: "linked-list", icon: "🔗" },
  { name: "Stack", path: "stack", icon: "📚" },
  { name: "Queue", path: "queue", icon: "🚶" },
  { name: "HashMap", path: "hashmap", icon: "🗂️" },
  { name: "HashSet", path: "hashset", icon: "🧩" },
  { name: "Recursion", path: "recursion", icon: "🔄" },
  { name: "Sorting", path: "sorting", icon: "📊" },
  { name: "Searching", path: "searching", icon: "🔍" },
  { name: "Binary Search", path: "binary-search", icon: "🎯" },
  { name: "Trees", path: "trees", icon: "🌳" },
  { name: "Binary Search Tree", path: "bst", icon: "🌲" },
  { name: "Heap", path: "heap", icon: "⛰️" },
  { name: "Priority Queue", path: "priority-queue", icon: "⚡" },
  { name: "Trie", path: "trie", icon: "🔠" },
  { name: "Graph", path: "graph", icon: "🕸️" },
  { name: "Greedy", path: "greedy", icon: "💡" },
  { name: "Backtracking", path: "backtracking", icon: "↩️" },
  { name: "Dynamic Programming", path: "dp", icon: "🧠" },
  { name: "Segment Tree", path: "segment-tree", icon: "🌴" },
  { name: "Fenwick Tree", path: "fenwick-tree", icon: "🌿" },
  { name: "Disjoint Set (Union Find)", path: "union-find", icon: "🔗" },
  { name: "Bit Manipulation", path: "bit-manipulation", icon: "💻" },
  { name: "Sliding Window", path: "sliding-window", icon: "🪟" },
  { name: "Two Pointer", path: "two-pointer", icon: "👉👈" },
  { name: "Monotonic Stack", path: "monotonic-stack", icon: "📈" },
  { name: "Topological Sort", path: "topological-sort", icon: "📌" },
  { name: "Shortest Path", path: "shortest-path", icon: "🛣️" },
  { name: "Minimum Spanning Tree", path: "mst", icon: "🌐" }
];

const DataStructurePage = () => {
  const navigate = useNavigate();

  return (
    <div className="dsa-page">

      <div className="hero-section">
        <h1>Data Structures & Algorithms</h1>
        <p>
          A collection of topics, interview questions, projects, notes,
          and real-world implementations that I've learned.
        </p>
      </div>

      <div className="topics-grid">
        {topics.map((topic) => (
          <div
            key={topic.path}
            className="topic-card"
            onClick={() => navigate(`/dsa/${topic.path}`)}
          >
            <div className="topic-icon">{topic.icon}</div>
            <h3>{topic.name}</h3>
            <p>Questions • Projects • Notes</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DataStructurePage;
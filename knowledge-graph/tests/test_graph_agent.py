from pathlib import Path
import sys
import unittest


APP_DIR = Path(__file__).resolve().parents[1] / "app"
sys.path.insert(0, str(APP_DIR))

from graph_agent import GraphAgent  # noqa: E402


class GraphAgentTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.agent = GraphAgent()

    def test_dean_question(self):
        result = self.agent.ask("数据科学学院院长是谁？")
        self.assertIn("Guillermo Gallego", result["answer"])
        self.assertTrue(result["sources"])

    def test_programme_question(self):
        result = self.agent.ask("有哪些硕士项目？")
        self.assertIn("数据科学理学硕士", result["answer"])
        self.assertNotIn("数据科学与大数据技术、", result["answer"])

    def test_reverse_research_lookup(self):
        result = self.agent.ask("谁研究机器学习？")
        self.assertIn("查宏远", result["answer"])
        self.assertIn("丁宏强", result["answer"])

    def test_person_profile(self):
        result = self.agent.ask("查宏远研究什么？")
        self.assertIn("机器学习及应用", result["answer"])
        self.assertEqual(result["intent"], "person_profile")

    def test_graph_contains_full_official_directory_snapshot(self):
        stats = self.agent.stats()
        self.assertEqual(stats["entities"], 469)
        self.assertEqual(stats["relationships"], 539)

    def test_partial_research_topic_matches_more_specific_topic(self):
        result = self.agent.ask("谁研究机器学习？")
        self.assertIn("查宏远", result["answer"])


if __name__ == "__main__":
    unittest.main()

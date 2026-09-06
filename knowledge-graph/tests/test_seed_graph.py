from pathlib import Path
import sys
import unittest


SCRIPTS = Path(__file__).resolve().parents[1] / "scripts"
sys.path.insert(0, str(SCRIPTS))

from common import load_seed  # noqa: E402
from validate_seed import validate  # noqa: E402


class SeedGraphTest(unittest.TestCase):
    def test_seed_graph_is_valid(self):
        self.assertEqual(validate(), [])

    def test_all_program_levels_are_represented(self):
        levels = {
            entity["level"]
            for entity in load_seed()["entities"]
            if entity["type"] == "Program"
        }
        self.assertEqual(levels, {"本科", "授课型硕士", "研究型硕博"})

    def test_every_person_works_at_the_school(self):
        seed = load_seed()
        people = {
            entity["id"] for entity in seed["entities"] if entity["type"] == "Person"
        }
        employed = {
            relationship["source"]
            for relationship in seed["relationships"]
            if relationship["type"] == "WORKS_AT"
        }
        self.assertEqual(people, employed)


if __name__ == "__main__":
    unittest.main()

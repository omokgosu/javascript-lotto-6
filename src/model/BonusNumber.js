import { Console } from "@woowacourse/mission-utils";
import { MIN_NUMBER , MAX_NUMBER } from "../constants/constants.js";

class BonusNumber {
  #bonusNumber;
  #targetNumber;

  #BONUS_NUMBER = '보너스 번호를 입력해 주세요.\n';
  #BONUS_NUM_MIN_MAX = '[ERROR] 보너스 번호는 1에서 45사이의 정수여야 합니다.';
  #BONUS_NUM_STRING = '[ERROR] 보너스 번호는 숫자여야 합니다.';
  #BONUS_NUM_DUPLICATE = '[ERROR] 보너스 번호는 당첨번호와 중복되지 않아야 합니다.';

  constructor(targetNumber) {
    this.#bonusNumber = 0;
    this.#targetNumber = targetNumber;
  };

  getBonusNumber() {
    return this.#bonusNumber;
  };

  async setBonusNumber() {
    const input = await Console.readLineAsync(this.#BONUS_NUMBER);
    const bonusNumber = Number(input);

    try {
      this.checkBonusNumber(bonusNumber);
      this.#bonusNumber = bonusNumber;
    } catch (error) {
      Console.print(error);
    }
  };

  checkBonusNumber(bonusNumber) {
    if (bonusNumber < MIN_NUMBER || bonusNumber > MAX_NUMBER) {
      throw this.#BONUS_NUM_MIN_MAX;
    }

    if (isNaN(bonusNumber)) {
      throw this.#BONUS_NUM_STRING;
    }

    if (this.#targetNumber.includes(bonusNumber)) {
      throw this.#BONUS_NUM_DUPLICATE;
    }
  };
}

export default BonusNumber;

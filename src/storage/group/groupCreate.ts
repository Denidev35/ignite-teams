import AsyncStorage from "@react-native-async-storage/async-storage"
import { groupsGetAll } from "@storage/group/groupsGetAll"
import { GROUP_COLLECTION } from "@storage/storageConfig"
import { AppError } from "@utils/AppError"

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll() 

    const groupAlreadyExistis = storedGroups.includes(newGroup)

    if(groupAlreadyExistis) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }

    const storage = JSON.stringify([...storedGroups, newGroup])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)

  } catch(error) {
    throw error
  }
} 
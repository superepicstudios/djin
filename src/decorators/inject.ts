import { InjectionToken } from '../providers/injection-token'
import { defineInjectionTokenMetadata } from '../reflection-helpers'

/**
 * Parameter decorator factory that allows for interface information to be stored in the constructor's metadata
 *
 * @return {Function} The parameter decorator
 */
export function inject(
  token: InjectionToken<any>,
): (
  target: any,
  propertyKey: string | symbol | undefined,
  parameterIndex: number,
) => any {
  return defineInjectionTokenMetadata(token)
}